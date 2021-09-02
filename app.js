// app.js
App({
  isIPX: -1 == wx.getSystemInfoSync().model.indexOf("iPhone X") ? "" : "isIPX",
  Android: -1 == wx.getSystemInfoSync().system.indexOf("Android") ? "" : "Android",
  onLaunch() {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
       console.log(e)
        this.globalData.Custom = custom;  
        this.globalData.sysInfo = e
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
        
      }
    })
    //检测版本更新
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function (res) {
                if (res.confirm) {
                  updateManager.applyUpdate()
                }
              }
            })
          })
          updateManager.onUpdateFailed(function () {
            // 新的版本下载失败
            wx.showModal({
              title: '已经有新版本了哟~',
              content: '新版本已经上线啦，请您删除当前小程序，重新搜索打开哟~'
            })
          })
        }
      })
    }//检测版本更新
  },
  globalData: {
    openid:null,
    StatusBar: null,
    navBarHeight:null,
    CustomBar:null,
    Custom:null,
    sysInfo:null,//可视化窗口高度
    couponList:null,
    userInfo: null, csnr: null, appid: null, fxnr: null, fwbjxtext: null, url: "http://www.creater.ltd/"
  }
})
