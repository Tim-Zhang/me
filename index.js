require.config({
  baseUrl: 'components',
  paths: {
    'jquery': 'jquery/jquery.min',
    'underscore': 'underscore/underscore-min',
    'backbone': 'backbone/backbone-min',
    'handlebars': 'handlebars/handlebars',
    'marked': 'marked/lib/marked',
    'moment': 'moment/moment',
    'scrollspy': 'bootstrap/js/bootstrap-scrollspy'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      'underscore': {
        exports: '_'
      },
      'handlebars': {
        exports: 'Handlebars'
      }
  },
  //urlArgs: "bust=" +  (new Date()).getTime()
  urlArgs: "bust=v2"
  
});

define(['jquery', 'underscore', 'backbone', 'handlebars', 'moment', 'marked'], 
  function($, _, Backbone, Handlebars, moment, marked) {
    require(['scrollspy']);
    var getYear = function(date) {
      return moment(date).year();
    };

    var timelineCol = Backbone.Collection.extend({
      comparator: function(model){
        return -moment(model.get('date')).unix(); 
      }
    });

    var timelineView = Backbone.View.extend({
      el: '#timeline',
      initialize: function() {
        this.render();
      },
      addMarkers: function() {
        var dates = this.collection.pluck('date');
        var data_formated = {};
        var years = _.map(dates, function(date) {
          return getYear(date);
        });
        years = _.uniq(years);
        this.addNavs(years);
        _.each(years, this.addMarker, this);
      },
      addMarker: function(year) {
        var year_model = new Backbone.Model({year: year});
        var marker = new markerView({model:year_model});
        this.$el.append(marker.render().el);
        this.addCards(year);
      },
      addCards: function(year) {
        var col = this.collection.filter(function(model) {
          return getYear(model.get('date')) === year;
        });
        // add Position
        col = _.map(col, function(model, index) {
          if (index % 2 === 0) {
            model.set('left', true);
          }
          return model;
        });
        _.each(col, this.addCard, this);
      },
      addCard: function(model) {
        var view = new cardView({model: model}); 
        this.$el.append(view.render().el);
      },
      addNavs: function(years) {
        var navs_model = new Backbone.Model({years: years});
        var navs = new navsView({model: navs_model}); 
        $('#timeline_nav').html(navs.render().el);
      },
      render: function() {
        this.addMarkers();
      }
        
    });
    
    var cardView = Backbone.View.extend({
      className: 'github',
      template: Handlebars.compile($('#timeline-card-template').html()),
      render: function() {
        var context = this.formateData(this.model.toJSON());
        context.content = context.content && marked(context.content); 
        context.comment = context.comment && marked(context.comment); 
        this.$el.html(this.template(context)); 
        return this;
      },
      formateData: function(data) {
        var data_formated = _.clone(data);
        var date = moment(data_formated.date);
        _.extend(data_formated, {
          year: date.year(),
          month: date.month() + 1,
          day: date.date()
        });
        return data_formated;
      }
    });


    var navsView = Backbone.View.extend({
      tagName: 'ul',
      className: 'nav',
      template: Handlebars.compile($('#timeline-nav-template').html()),
      render: function() {
        var context = _.extend({}, {birth: data.birth}, this.model.toJSON());
        this.$el.html(this.template(context)); 
        return this;
      }
    });

    var markerView = Backbone.View.extend({
      template: Handlebars.compile($('#timeline-marker-template').html()),
      render: function() {
        this.$el.html(this.template(this.model.toJSON())); 
        return this;
      }
    });
    
    var bornView = Backbone.View.extend({
      template: Handlebars.compile($('#born-template').html()),
      initialize: function() {
        this.render();
      },
      render: function() {
        $('#timeline_wrapper').append(this.template(data.birth));
        return this;
      }
    });

    var bannerView = Backbone.View.extend({
      template: Handlebars.compile($('#banner-template').html()),
      initialize: function() {
        this.render();
      },
      render: function() {
        $('#header').append(this.template(data.banner));
        return this;
      }
    });

    var codeIntroView = Backbone.View.extend({
      template: Handlebars.compile($('#code-intro-template').html()),
      initialize: function() {
        this.render();
      },
      render: function() {
        $('#header').append(this.template(data.code_intro));
        return this;
      }
    });

    var timeline = new timelineCol(data.feeds);
    if (data.banner) {
      new bannerView();
    }
    new codeIntroView();
    new markerView({collection: timeline});
    new timelineView({collection: timeline});
    
    if (data.birth) {
      new bornView();
    }

});


