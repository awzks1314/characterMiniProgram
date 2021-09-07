// pages/my/log/log.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logData:[
      {
        time:'Sep 6 2021',
        version:'v1.0.1',
        content:[
          '1.发布第一版本'
        ]
      }
    ],
    scrollTop:0
  },
  //页面滚动执行方式
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})