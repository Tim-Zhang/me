// data
var data = {};
data.birth = "1987-10-06";
data.banner = "resource/banner.jpg";
            
data.feeds = [
  {
    "date": "2013-04-28",
    "content": "与[安全宝](http://www.anquanbao.com)合作，推出DNSPod安全中心",
    "comment": "前端工程师 | 项目负责人"
  },
  {
    "date": "2013-04-15",
    "content": "[DnsGit](http://dnsgit.com)上线，实现自己去年的想法，用Git管理域名，使用命令行就可以搞定域名管理，支持各种回滚和版本控制，一键将域名还原到历史状态！[github地址](https://github.com/zewenzhang/dnsgit)(开源了网站代码，DNS模块没有开源) [V2EX推广贴](http://www.v2ex.com/t/69482)",
    "comment": "CEO | 前端 | Node.js"
  },
  {
    "date": "2013-04-01",
    "content": "[节操网](http://jiecao.pw)隆重上线（刚上线时只有“已上线”三个字），用于接受各种吐槽和赞助各种活动（因为是空壳只能这样啦！），将专注于做各种搞怪的功能",
    "image": "resource/jiecao.png",
    "image_src": "http://jiecao.pw",
    "comment": "CEO | 节操君"
  },
  {
    "date": "2013-03-27",
    "content": "推出系列做菜视频——[《银河怡海教你做菜》](http://www.youku.com/playlist_show/id_19105208.html)拯救宅男宅女于水火之中！请关注微信公共帐号yhyhdnspod",
    "image": "resource/dnspod_yhyh.png",
    "image_src": "http://www.youku.com/playlist_show/id_19105208.html",
    "comment": "爱生活，爱做菜"
  },
  {
    "date": "2013-01-24",
    "content": "我在韩国，去了之后发现英语不好用，看这么多年韩剧总算派上了用场！韩国人礼貌，爱美，爱干净，关键是妹子不错！",
    "image": "resource/dnspod_korea.jpg",
    "comment": "那些年我们一起看过的韩剧"
  },
  {
    "date": "2013-01-01",
    "content": "与腾讯CDC合作全新改版[D监控](https://www.dnspod.cn/Monitor)，与腾讯的交互设计师和视觉设计师一起工作，学到了很多交互知识并被他们的专业精神所打动",
    "comment": "前端工程师 | WEB Team Leader"
  },
  {
    "date": "2012-09-15",
    "content": "与QQ空间、CNNIC合作推出[QQ.CN域名注册服务](http://qzs.qq.com/qzone/mall/act/20121231_vip_domain/)，连夜抢注QQ号域名100万，神马？？？上新闻了，我交代，是我干的！[人民网](http://it.people.com.cn/n/2012/0906/c1009-18940643.html) [网易科技](http://tech.163.com/12/0907/02/8AP0PUUP000915BF.html)",
    "image": "resource/dnspod_qzone.jpg",
    "image_src": "http://qzs.qq.com/qzone/mall/act/20121231_vip_domain/",
    "comment": "项目采用Python开发，给QQ空间提供restful API"
  },
  {
    "date": "2012-08-15",
    "content": "做了个Chrome查单词插件，后端基于同事的英语教育网站[滚去背单词](http://rollingword.com)。[github地址](https://github.com/zewenzhang/Rolling-Chrome-Extension)",
    "image": "resource/dnspod_rolling.png",
    "image_style": "width: auto",
    "image_src": "https://chrome.google.com/webstore/detail/%E6%BB%9A%E5%8E%BB%E8%83%8C%E5%8D%95%E8%AF%8D%E6%8F%92%E4%BB%B6/bimhfdjjfljpconebbamgcpkjodgohek?utm_source=chrome-ntp-icon",
    "comment": "Javascript | Chrome Extension"
  },
  {
    "date": "2012-07-04",
    "content": "策划“D蛙大赛”，我们的口号是“要有爱，无爱不coding。” 等等，请注意节操（[jiecao.pw](http://jiecao.pw)），不要在注释里吐槽！",
    "image": "resource/dnspod_wa.jpg",
    "comment": "用生命娱乐，做有爱的Programmer"
  },
  {
    "date": "2012-06-27",
    "content": "经常在家里召开几十人的party。路人甲：“今天坐不开了！”男主：“改自助餐！”",
    "image": "resource/dnspod_party.jpg",
    "comment": "爱生活，爱做菜"
  },
  {
    "date": "2012-03-11",
    "content": "加入[DNSPod](https://www.dnspod.cn)，这家充满着传奇的公司，这家大牛满天飞的公司。我每天仰视他们，脖子都快断了，哎呀。。揉揉！",
    "image": "resource/dnspod_logo.png",
    "image_style": "width: auto",
    "image_src": "https://www.dnspod.cn",
    "comment": "前端工程师 | WEB Team Leader"
  },
  {
    "date": "2012-02-25",
    "content": "[米饭网](http://www.mifan365.com)——烟台最大的团购网站。公司在成长，我也从唯一程序员变成leader，服务器从windows换成3台Debian（web,database,backup）,当然了我成了运维（好囧）。在米饭网工作两年遇到了很多高并发问题和DDOS攻击，现在想想还挺好玩的。",
    "image": "resource/mifan_sofa.jpg",
    "image_style": "",
    "image_src": "http://www.mifan365.com",
    "comment": "PHP程序员 | Linux(ESX)服务器运维" 
  },
  {
    "date": "2011-09-29",
    "content": "神马情况！！！这是生日礼物？某人从此过上了砸蒜不用菜刀的幸福生活！（其实是我管公司要的，那个时候就这么欢乐！哎。。。）",
    "image": "resource/mifan_gift.jpg",
    "image_style": "",
    "comment": "PHP程序员 | Linux(ESX)服务器运维" 
  },
  {
    "date": "2010-07-10",
    "content": "[米饭网](http://www.mifan365.com)——从零开始做团购。非常不幸的是，在这里，我是个能做水晶头，能修打印机的程序员。等等！先不要拍砖，人少没办法啊！",
    "image": "resource/mifan_wall.jpg",
    "image_style": "",
    "image_src": "http://www.mifan365.com",
    "comment": "PHP程序员 | Linux(ESX)服务器运维" 
  },
  {
    "date": "2010-06-28",
    "image": "resource/graduate.png",
    "content": "面目最清秀的就是我，他们长的好模糊，囧！",
    "image_style": "",
    "comment": "毕业于[山东工商学院](http://ccec.edu.cn/)"
  },
  {
    "date": "2009-11-01",
    "image": "resource/huize.jpg",
    "content": "加入惠泽网络科技有限公司",
    "image_style": "",
    "comment": ".net程序员"
  }
];

// console info

!console && (console = {}) && (console.info = function(){});
console.info('请叫我Tim');
console.info('请使用DnsGit管理域名： https://dnsgit.com');
console.info('请使用节操网管理节操： https://jiecao.pw');
console.info('欢迎关注我的github： https://github.com/zewenzhang');
