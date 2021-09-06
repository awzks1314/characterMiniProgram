const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList:['性格', '心理', '情感', '趣味', '节日', '答题'],
    currentTab:0,
    itemId:'',
    scrollTop:0,
    menuHeight:0,
    listData:[]
  },
  onLoad(){
    // this.getElRect('menus', 'menuHeight')
    // this.getElRect('menu', 'menuItemHeight')
    this.getData()
  },
  getData() {
    // console.log(app.globalData.csnr)
    let list = app.globalData.csnr
    var fieldList = [],att=[];
    list.map((e)=>{
        fieldList.push(e[7])
    })
    //数组去重
    fieldList = fieldList.filter((e,i,self)=>{
        return self.indexOf(e)==i
    })
    for(var j=0;j<fieldList.length;j++){
        //过滤出匹配到的数据
        var arr = list.filter((e)=>{
            return e[7]==fieldList[j];
        })
        att.push({
            type:arr[0][7],
            list:arr
        })
    }
    att.sort((a,b) => a.type - b.type)
    this.setData({
      listData:att
    })
  },
  detail(t) {
    var o = t.currentTarget.dataset.index;
    let data = this.data.listData[this.data.currentTab].list
    let topic = {
      id:data[o][0],
      title:data[o][1],
      banner:data[o][5],
      desc:data[o][2],
      numer:data[o][6],
      subType:data[o][8],
      xpzcs:0//是否是小瓶子
    }
    wx.setStorageSync('topicInfo', topic)
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
  // 左侧点击
  swichNav(e){
    var current = e.currentTarget.dataset.current;
    if(current == this.data.currentTab){
      return
    }
    wx.nextTick( () => {
      // this.setData({
      //   scrollRightTop:this.data.menuList[current].top
      // })
			this.leftMenuStatus(current);
    })
  },

  // 设置左边菜单的滚动状态
  leftMenuStatus(index) {
    console.log(index)
    // 将菜单活动item垂直居中
    this.data.scrollTop = index * this.data.menuItemHeight + this.data.menuItemHeight / 2 - this.data.menuHeight / 2;
    this.setData({
      currentTab:index,
      scrollTop:this.data.scrollTop
    })
  },

  // 获取一个目标元素的高度
  getElRect(elClass, dataVal) {
    new Promise((resolve, reject) => {
      const query = wx.createSelectorQuery().in(this);
      query.select('.' + elClass).fields({
        size: true
      }, res => {
        // 如果节点尚未生成，res值为null，循环调用执行
        if (!res) {
          setTimeout(() => {
            this.getElRect(elClass);
          }, 10);
          return;
        }
        this.setData({
          [dataVal]:res.height
        })
        resolve();
      }).exec();
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})