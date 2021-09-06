var app = getApp()
Page({
    data: {
        isIPX: app.isIPX,
        Android: app.Android,
        searchKeyword:'',
        listData: [],
        scrollTop:0
    },
    //页面滚动执行方式
    onPageScroll(e) {
      this.setData({
        scrollTop: e.scrollTop
      })
    },
    onLoad: function(a) {
        
    },
    inConfirm(e) {
        var that = this
        if (e.detail.value) {
            wx.request({
                url: app.globalData.url + "ndzscs/request1/sscs.php",
                data: {
                    tm: e.detail.value
                },
                method: "GET",
                header: {
                    "content-type": "application/json"
                },
                success: function (t) {
                    that.setData({
                        listData:t.data
                    })
                },
                fail: function () {
                    wx.showToast({
                        title: "连接服务器失败，请重新查找！",
                        icon: "none",
                        duration: 1000
                    });
                }
            });
        }
    },
    detail(t) {
        var o = t.currentTarget.dataset.index;
        let topic = {
          id:this.data.listData[o][0],
          title:this.data.listData[o][1],
          banner:this.data.listData[o][5],
          desc:this.data.listData[o][2],
          numer:this.data.listData[o][6],
          subType:this.data.listData[o][8],
          xpzcs:0//是否是小瓶子
        }
        wx.setStorageSync('topicInfo', topic)
        wx.navigateTo({
          url: "/pages/detail/detail"
        })
      },
});