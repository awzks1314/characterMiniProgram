function shareConfig(){
  var messages = [
    {   "title": "想要知道你的渣男/渣女属性吗？",
      "path": "/pages/home/home",
      "imageUrl" : "http://www.creater.ltd:8888/down/0LddMk46XM9Q",
    }
    ,{
      "title": "你理想中的另一半是什么样？",
      "path": "/pages/home/home",
      "imageUrl" : "http://www.creater.ltd:8888/down/0LddMk46XM9Q"
    },{
      "title": "测试适合你的职业",
      "path": "/pages/home/home",
      "imageUrl" : "http://www.creater.ltd:8888/down/0LddMk46XM9Q"
    },{
      "title": "标准智商测试表(IQ)",
      "path": "/pages/home/home",
      "imageUrl" : "http://www.creater.ltd:8888/down/0LddMk46XM9Q"
    },{
      "title": "测试他/她在你心目中的地位",
      "path": "/pages/home/home",
      "imageUrl" : "http://www.creater.ltd:8888/down/0LddMk46XM9Q"
    },{
      "title": "今年你会脱单吗？",
      "path": "/pages/home/home",
      "imageUrl" : "http://www.creater.ltd:8888/down/0LddMk46XM9Q"
    },{
      "title": "心理健康状况测试",
      "path": "/pages/home/home",
      "imageUrl" : "http://www.creater.ltd:8888/down/0LddMk46XM9Q"
    },{
      "title": "测试你的细心程度",
      "path": "/pages/home/home",
      "imageUrl" : "http://www.creater.ltd:8888/down/0LddMk46XM9Q"
    },
    {
      "title": "为什么你的压力这么大？",
      "path": "/pages/home/home",
      "imageUrl" : "http://www.creater.ltd:8888/down/0LddMk46XM9Q"
    }
  ];
  return messages[Math.floor(Math.random()*messages.length)];
}

module.exports = {
  shareConfig
}