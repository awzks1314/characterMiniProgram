const fun = require('../../utils/share')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bnrUrl:[],//轮播
    cardCur:1,//轮播index
    csnr:[],//列表信息已分页
    listData:[],//总
    pageNo:0,
    total:0,//总长度
    len:null,//总页数
    scrollTop:0,
  },
  //页面滚动执行方式
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  onLoad() {
    this.getBanner()
    this.onPullDownRefresh()
  },
  // 轮播
  onPullDownRefresh () {
    this.getInfoList()
    wx.stopPullDownRefresh();
  },
  onReachBottom() {    
    if (this.data.pageNo < this.data.len) {
      this.setData({
        pageNo: +this.data.pageNo + 1
      },() => {
        
        this.setData({
          listData:[...this.data.listData,...this.data.csnr[this.data.pageNo]]
        })
      })
    }
  },
  // 获取信息
  getInfoList() {
    var s = this;
    var chunk = 10;
    var result = [];
    wx.request({
        url: app.globalData.url + "ndzscs/request1/main.php",
        method: "GET",
        header: {
            "content-type": "application/json"
        },
        success: function (c) {
            app.globalData.csnr = c.data;
            var len = c.data.length;
            for (let i = 0; i < len; i += chunk) {
              result.push(c.data.slice(i, i + chunk)) // 每10项分成一组        
            }
            s.setData({
              total:c.data.length,
              listData:result[s.data.pageNo],
              csnr: result,
              len:result.length
            })
        },
        fail: function () {
            wx.showToast({
                title: "连接服务器失败，请下拉刷新！",
                icon: "none",
                duration: 2e3
            });
        }
    })
  },
  getBanner() {
    var that = this
    wx.request({
      url: app.globalData.url + "ndzscs/request1/mains.php",
      method: "GET",
      header: {
          "content-type": "application/json"
      },
      success: function (e) {
        console.log(e)
        that.setData({
            bnrUrl: e.data
        })
      },
  });
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // 轮播跳转
  bannerDetail(t) {
    console.log(t)
    var o = t.currentTarget.dataset.index;
    // let topic = {
    //   id:this.data.bnrUrl[o][0],
    //   title:this.data.bnrUrl[o][1],
    //   banner:this.data.bnrUrl[o][5],
    //   desc:this.data.bnrUrl[o][2],
    //   numer:this.data.bnrUrl[o][6],
    //   subType:this.data.bnrUrl[o][8],
    //   xpzcs:0//是否是小瓶子
    // }
    wx.setStorageSync('topicInfo', this.data.bnrUrl[o])
    wx.navigateTo({
      url: "/pages/detail/detail"
    })
  },
  detail(t) {
    var o = t.currentTarget.dataset.index;
    // let topic = {
    //   id:this.data.listData[o][0],
    //   title:this.data.listData[o][1],
    //   banner:this.data.listData[o][5],
    //   desc:this.data.listData[o][2],
    //   numer:this.data.listData[o][6],
    //   subType:this.data.listData[o][8],
    //   xpzcs:0//是否是小瓶子
    // }
    wx.setStorageSync('topicInfo', this.data.listData[o])
    wx.navigateTo({
      url: "/pages/detail/detail"
    })
  },
  // 搜索
  goToSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return fun.shareConfig();
  }
})