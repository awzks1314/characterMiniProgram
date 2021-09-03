// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topicInfo:{}
  },
  onLoad() {
    this.setData({
      topicInfo:wx.getStorageSync('topicInfo')
    })
  },
  start() {
    wx.navigateTo({
      url: '/pages/start/start'
    })
  }
})