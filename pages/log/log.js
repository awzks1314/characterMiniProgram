// pages/my/log/log.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logData:[
      {
        time:'Sep 1 2021',
        version:'v1.0.8',
        content:[
          '1.free-input新增height字段',
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