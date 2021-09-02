const fun = require('../../utils/share')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bnrUrl:[],
    cardCur:0,
    scrollTop:0
  },
  //页面滚动执行方式
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  onLoad() {
    // this.getBanner()
  },
  // 查询信息
  getList() {

  },
  getBanner() {
    var that = this
    wx.request({
      url: app.globalData.url + "ndzscs/request1/zst.php",
      method: "GET",
      header: {
          "content-type": "application/json"
      },
      success: function (e) {
        console.log(e)
        that.setData({
            bnrUrl: [{
              "url": e.data.tp1
          }, {
              "url": e.data.tp2
          }, {
              "url": e.data.tp3
          }, {
              "url": e.data.tp4
          }]
        })
      },
  });
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  detail() {
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  // 搜索
  goToSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return fun.shareConfig();
  }
})