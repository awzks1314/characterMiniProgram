const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:app.globalData.list
  },
  open() {
    wx.previewImage({
      urls: ['https://www.creater.ltd/image/wechat.jpg']
    }) 
  },
  goToMini(e) {
    wx.navigateToMiniProgram({
      appId: e.currentTarget.dataset.appid, 
      path: e.currentTarget.dataset.path,
      success(res) {
      // 打开成功
      } 
    })
  },
  goToUrl(e){
    let dat = e.currentTarget.dataset
    if (!dat.url) return ;

    if (dat.type == 'tab') {
      wx.switchTab({
        url: dat.url
      })
    }else {
      wx.navigateTo({
        url: dat.url
      })
    }
  }
})