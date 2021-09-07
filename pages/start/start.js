const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topicInfo:[],
    questionList:[],//问题列表
    currentTab:0,
    answerList:[],
    listData:[],//题目列表
    isStart:false,
    scrollTop:0,
    nowIndx:-1,//当前选中
    userInfo:{},
    id:''
  },
  onLoad(options) {
    this.setData({
      userInfo:wx.getStorageSync('userInfo'),
      topicInfo:wx.getStorageSync('topicInfo')
    },() => {
      wx.setNavigationBarTitle({
        title: this.data.topicInfo[1]
      })
      this.getList()
    })
  },
  onReady() {
    var o = this
    console.log(app.globalData.appid)
    if (app.globalData.appid == null) {
      wx.login({
        success: function (n) {
          var code1 = n.code;
          wx.request({
            url: app.globalData.url +"ndzscs/phb/hqopenid.php",
            method: "GET",
            header: {
              "content-type": "application/json"
            },
            data: {
              code: code1
            },
            success: function (s) {
              app.globalData.appid = s.data;
              o.setData({
                id: s.data
              })
            },
          }) //获取openid
        }
      })
    }//appid为空重新加载
    else {      
      o.setData({
        id: app.globalData.appid
      })
    }
  },
  getList() {
    var that = this
    wx.request({
      url: app.globalData.url + "ndzscs/request1/sstk.php",
      data: {
        tm: 'a' + that.data.topicInfo[0]
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
  // 开始
  isStart() {
    this.setData({
      isStart:true
    }, () => {
      let time = setTimeout(() => {
        clearTimeout(time)
        this.setData({
          questionList:[
            {
              question:this.data.listData[0],
              len:this.data.listData[0].length - 2,
              selectIndex:-1,
              answer:''
            }
          ],
          scrollTop: 1000
        })
      },300)
    })
  },
  // 输入答案
  getInputValue(e) {
    if ( !e.detail.value) {
      return
    }
    console.log(e)
    let dat = e.currentTarget.dataset
    console.log(this.data.questionList[dat.index].selectIndex)
    if (this.data.questionList[dat.index].selectIndex != -1) {
      return
    }
    this.data.questionList[dat.index].selectIndex = e.detail.value
    
    this.data.questionList[dat.index].answer = e.detail.value
    this.setData({
      questionList:this.data.questionList,
      nowIndx:dat.index
    })

    // 增加问题
    this.addQuestion(dat.index)
  },
  // 选择答案
  selectAnswer(e) {
    let dat = e.currentTarget.dataset

    if (this.data.questionList[dat.index].selectIndex != -1) {
      return
    }
    this.data.questionList[dat.index].selectIndex = (dat.items - 2)
    // console.log(e.detail.value)
    // console.log(e.detail.value.indexOf('http'))
    let str = this.data.questionList[dat.index].question[dat.items]
    if (str.indexOf('http') == 0) {
      this.data.questionList[dat.index].type = 'img'
    }
    this.data.questionList[dat.index].answer = str
    this.setData({
      questionList:this.data.questionList,
      nowIndx:dat.index
    })

    // 增加问题
    this.addQuestion(dat.index)
  },
  // 返回上一题
  backTopic(e) {
    let index = e.currentTarget.dataset.index
    if (index > 0 && this.data.questionList[index].selectIndex == -1) {
      // 增加问题
      this.addQuestion(index - 2)
    }
  },
  // 增加问题
  addQuestion(index) {
    // var that = this
    
    if (index < this.data.listData.length - 1) {
      // 继续塞入问题
      this.data.questionList.push(
        {
          question:this.data.listData[index + 1],
          len:this.data.listData[index + 1].length - 2,
          selectIndex:-1,
          answer:''
        }
      )
      let time = setTimeout(() => {
        clearTimeout(time)
        this.setData({
          questionList:this.data.questionList,
          
        },() => {
          this.setData({
            scrollTop:1000*index + 1000
          })
        })
      },300)
    }
  },
  // 生成结果
  getResultData() {
    let arr = []
    this.data.questionList.forEach(i => {
      if (i.selectIndex == 0) {
        arr.push('A')
      }else if(i.selectIndex == 1) {
        arr.push('B')
      }else if(i.selectIndex == 2) {
        arr.push('C')
      }else if(i.selectIndex == 3) {
        arr.push('D')
      }else if(i.selectIndex == 4) {
        arr.push('E')
      }else if(i.selectIndex == 5) {
        arr.push('F')
      }else if(i.selectIndex == 6) {
        arr.push('G')
      }else if(i.selectIndex == 7) {
        arr.push('H')
      }else if(i.selectIndex == 8) {
        arr.push('I')
      }else if(i.selectIndex == 9) {
        arr.push('J')
      }else {
        arr.push(i.selectIndex)
      }
    })
    wx.showLoading({
      title: '正在生成测试报告',
    })
    var that = this
    let url = 'a' + that.data.topicInfo[0]
    // 记录次数
    that.addNum()
    wx.request({
      url: app.globalData.url + "ndzscs/request2/" + url + ".php",
      data: {
        tm: arr, 
        name: wx.getStorageSync('userInfo').nickName, 
        id: that.data.id, 
        tx: wx.getStorageSync('userInfo').avatarUrl,
      },
      method: "GET",
      header: {
        "content-type": "application/json;charset=utf-8"
      },
      success:(res => {
        console.log(res)
        if (res.data.df == 'ldt') {
          // 雷达图
          wx.setStorageSync('ldt', res.data)
          wx.redirectTo({
            url: '/pages/ldt/ldt',
          })
        }else if (res.data.df == 'fwbjx') {
          // 自定义指数图
          wx.setStorageSync('fwbjx', res.data)
          wx.redirectTo({
            url: '/pages/fwbjx/fwbjx',
          })
        }else{
          // 无背景图
          wx.setStorageSync('otherResult', res.data)
          wx.redirectTo({
            url: '/pages/otherResult/otherResult',
          })
        }
        wx.hideLoading()
      })
    })
  },
  addNum() {
    wx.request({
      url: app.globalData.url + "ndzscs/request1/sccscs.php",
      data: {
        tm: this.data.topicInfo[0]
      },
      method: "GET",
      header: {
        "content-type": "application/json;charset=utf-8"
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})