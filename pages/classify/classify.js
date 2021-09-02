const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList:['性格', '心理', '情感', '趣味', '节日', '答题', '瓶子'],
    currentTab:0,
    itemId:'',
    scrollTop:0,
    menuHeight:0,
  },
  onLoad(){
    // this.getElRect('menus', 'menuHeight')
    // this.getElRect('menu', 'menuItemHeight')
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