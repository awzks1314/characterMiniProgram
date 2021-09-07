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
      testData:wx.getStorageSync('otherResult')
    })
  },
  backHome() {
    if (wx.getStorageSync('origin')!== null) {
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
      "title": '我完成了“'+this.data.testData.csm+"”你也来评测一下吧！",
      "path": "/pages/home/home",
      "imageUrl" : "http://www.creater.ltd:8888/down/0LddMk46XM9Q",
    }
  }
})