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
  },
  globalData: {
    openid:null,
    StatusBar: null,
    navBarHeight:null,
    CustomBar:null,
    Custom:null,
    sysInfo:null,//可视化窗口高度
    couponList:null,
  }
})
