// pages/otherResult/otherResult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      testData:wx.getStorageSync('fwbjx').ztpj
    })
  },
  backHome() {
    if (wx.getStorageSync('origin') !== null) {
      wx.setStorageSync('origin', null)
      wx.switchTab({
        url: '/pages/list/list',
      })
    }else {
      wx.switchTab({
        url: '/pages/home/home',
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      "title": this.data.testData.csm,
      "path": "/pages/home/home",
      "imageUrl" : "http://www.creater.ltd:8888/down/0LddMk46XM9Q",
    }
  }
})