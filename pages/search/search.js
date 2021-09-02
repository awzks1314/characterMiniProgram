var a = getApp()
Page({
    data: {
        isIPX: a.isIPX,
        Android: a.Android,
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


    

    onShareAppMessage: function() {
        return {
            title: "这些壁纸你喜欢吗？",
            path: "pages/search/search?tag=" + this.data.pageJson.tag
        };
    },
    onShareTimeline:function() {
        return {
            title: "这些壁纸你喜欢吗？",
            query:{
                tag:this.data.pageJson.tag
            }
        };
    },
});