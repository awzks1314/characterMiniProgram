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
    if (wx.getStorageSync('userInfo')) {
      wx.navigateTo({
        url: '/pages/start/start'
      })
    }else {
      wx.getUserProfile({
        desc: "获取你的昵称、头像",
        success: res => {
          console.log(res)
          let wxUserInfo = res.userInfo;
          wx.setStorageSync('userInfo', wxUserInfo)
          wx.navigateTo({
            url: '/pages/start/start'
          })
        },
        fail: res => {
           //拒绝授权
           let wxUserInfo = {
            nickName: "游客",
            avatarUrl:'http://q1.qlogo.cn/g?b=qq&nk=664423077&s=100'
           }
           wx.setStorageSync('userInfo', wxUserInfo)
          wx.navigateTo({
            url: '/pages/start/start'
          })
          return;
        }
      })
    }
  }
})