function shareConfig(){
  var messages = [
    {   "title": "美团饿了么大额红包，每日可领！",
      "path": "/pages/coupon/coupon",
      "imageUrl" : "https://6e65-newpicture-9gfdwu1vedeced36-1304925472.tcb.qcloud.la/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png?sign=7f52e702e19ec05633587b6a467d14b5&t=1627009933",
    }
    ,{
      "title": "吃了这么多年外卖，你知道这个秘密吗？",
      "path": "/pages/coupon/coupon",
      "imageUrl" : "https://6e65-newpicture-9gfdwu1vedeced36-1304925472.tcb.qcloud.la/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png?sign=7f52e702e19ec05633587b6a467d14b5&t=1627009933"
    },{
      "title": "这样点外卖，一年省下一个亿",
      "path": "/pages/coupon/coupon",
      "imageUrl" : "https://6e65-newpicture-9gfdwu1vedeced36-1304925472.tcb.qcloud.la/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png?sign=7f52e702e19ec05633587b6a467d14b5&t=1627009933"
    },{
      "title": "点外卖前先领券，吃霸王餐",
      "path": "/pages/coupon/coupon",
      "imageUrl" : "https://6e65-newpicture-9gfdwu1vedeced36-1304925472.tcb.qcloud.la/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png?sign=7f52e702e19ec05633587b6a467d14b5&t=1627009933"
    },{
      "title": "美团饿了么内部优惠券，手慢无",
      "path": "/pages/coupon/coupon",
      "imageUrl" : "https://6e65-newpicture-9gfdwu1vedeced36-1304925472.tcb.qcloud.la/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png?sign=7f52e702e19ec05633587b6a467d14b5&t=1627009933"
    },{
      "title": "点外卖不用优惠券，你就out了",
      "path": "/pages/coupon/coupon",
      "imageUrl" : "https://6e65-newpicture-9gfdwu1vedeced36-1304925472.tcb.qcloud.la/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png?sign=7f52e702e19ec05633587b6a467d14b5&t=1627009933"
    },{
      "title": "外卖不为人知的秘密，点这解密",
      "path": "/pages/coupon/coupon",
      "imageUrl" : "https://6e65-newpicture-9gfdwu1vedeced36-1304925472.tcb.qcloud.la/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png?sign=7f52e702e19ec05633587b6a467d14b5&t=1627009933"
    },{
      "title": "震惊！小伙点外卖竟然花了1分钱",
      "path": "/pages/coupon/coupon",
      "imageUrl" : "https://6e65-newpicture-9gfdwu1vedeced36-1304925472.tcb.qcloud.la/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png?sign=7f52e702e19ec05633587b6a467d14b5&t=1627009933"
    },
    {
      "title": "从这点外卖，你也可以吃霸王餐",
      "path": "/pages/coupon/coupon",
      "imageUrl" : "https://6e65-newpicture-9gfdwu1vedeced36-1304925472.tcb.qcloud.la/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png?sign=7f52e702e19ec05633587b6a467d14b5&t=1627009933"
    }
  ];
  return messages[Math.floor(Math.random()*messages.length)];
}

module.exports = {
  shareConfig
}