const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    list:[],
    tabList:[],
    topThree:[],
    otherList:null
  },
  onShow() {
    this.getTitle()
    this.getData()
  }, 
  getTitle() {
    var that = this
    wx.request({
      url: app.globalData.url +"ndzscs/phb/main.php",
      method: "GET",
      data: {},
      header: {
        "content-type": "application/json"
      },
      success: function (e) {
        console.log(e.data)
        var arr = []
        e.data.forEach(i => {
          arr.push({
            name:i[1]
          })
        })
          that.setData({
            list:arr,
            tabList:e.data
          })
      }
    })
  },
  getData() {
    var that = this
    wx.request({
      url: app.globalData.url +"ndzscs/phb/hqphb.php",
      method: "GET",
      data: {
        tm: this.data.currentTab + 1
      },
      header: {
        "content-type": "application/json"
      },
      success: function (e) {
        that.setData({
          topThree:e.data.slice(0,3),
          otherList:e.data.slice(3,10) || []
        })
      }
    })
  },
  change(e) {
    this.setData({
      currentTab:e.detail.index
    },() => {
      this.getData()
    })
  },
  // 打榜
  hit() {
    // console.log(this.data.tabList[this.data.currentTab])
    let id = this.data.tabList[this.data.currentTab][3]
    wx.request({
      url: app.globalData.url +"ndzscs/phb/dbss.php",
      method: "GET",
      data: {
        tm: id,
      },
      header: {
        "content-type": "application/json"
      },
      success: function (e) {
        wx.setStorageSync('topicInfo', e.data[0])
        wx.setStorageSync('origin', 'hit')
        wx.navigateTo({
          url: "/pages/detail/detail"
        })
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      "title": "邀请您来挑战我,你也来评测一下吧！",
      "path": "/pages/list/list",
      "imageUrl" : "http://www.creater.ltd:8888/down/0LddMk46XM9Q",
    }
  }
})