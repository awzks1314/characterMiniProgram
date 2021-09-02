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