const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topicInfo:{},
    questionList:[],//问题列表
    currentTab:0,
    answerList:[],
    listData:[],//题目列表
    isStart:false
  },
  onLoad(options) {
    this.setData({
      topicInfo:wx.getStorageSync('topicInfo')
    },() => {
      wx.setNavigationBarTitle({
        title: this.data.topicInfo.title
      })
      this.getList()
    })
  },
  getList() {
    var that = this
    wx.request({
      url: app.globalData.url + "ndzscs/request1/sstk.php",
      data: {
        tm: that.data.topicInfo==1?'b':'a' + that.data.topicInfo.id
      },
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function (t) {
        that.setData({
          listData:t.data
        })
      }
    })
  },
  isStart() {
    this.setData({
      isStart:true,
      questionList:[
        {
          question:this.data.listData[0],
          len:this.data.listData[0].length - 2,
          selectIndex:'',
          answer:''
        }
      ]
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})