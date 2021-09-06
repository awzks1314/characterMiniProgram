import * as echarts from '../../ec-canvas/echarts';
const app = getApp();
var barec = null
Page({
  data: {
    ec: {
      onInit: function (canvas, width, height) {
        barec = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(barec);
        return barec;
      },
      indicator:[],
      ztpj:"",
      title:'',
      indicatorValue:[],
      show:false
    }
  },

  onReady() {
    this.processingData()
    setTimeout(() => {
      this.getData()
    }, 300);
  },
  // 处理数据
  processingData() {
    let data = wx.getStorageSync('ldt')
    this.data.indicator = [{ name:data.bq1,max:100},{ name:data.bq2,max:100},{ name:data.bq3,max:100},{ name:data.bq4,max:100}]
    if (data.bq5 != null) { this.data.indicator.push({ name:data.bq5,max:100 })}
    if (data.bq6 != null) { this.data.indicator.push({ name:data.bq6,max:100 })}
    if (data.bq7 != null) { this.data.indicator.push({ name:data.bq7,max:100 })}
    if (data.bq8 != null) { this.data.indicator.push({ name:data.bq8,max:100 })}

    
    this.data.indicatorValue = [data.pf1,data.pf2,data.pf3,data.pf4]
    if (data.pf5 != null) { this.data.indicatorValue.push(data.pf5)}
    if (data.pf6 != null) { this.data.indicatorValue.push(data.pf6)}
    if (data.pf7 != null) { this.data.indicatorValue.push(data.pf7)}
    if (data.pf8 != null) { this.data.indicatorValue.push(data.pf8)}

    this.setData({
      ztpj:data.ztpj,
      title:data.csm,
      indicator:this.data.indicator,
      indicatorValue:this.data.indicatorValue
    })
  },
  getData() {
    barec.setOption({
      backgroundColor: "#ffffff",
      tooltip: {},
      xAxis: {
        show: false
      },
      yAxis: {
        show: false
      },
      radar: {
        // shape: 'circle',
        indicator: this.data.indicator,
        
        name: {
          textStyle:{
            color:'#333'
          }
        }
      },
      series: [{
        name: 'XX',
        type: 'radar',
        symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
        symbolSize: 6,
        itemStyle: {     //此属性的颜色和下面areaStyle属性的颜色都设置成相同色即可实现
            color: '#0081ef'
        },
        areaStyle: {
          normal: {
            width: 1,
              opacity: 0.5,  //背景透明
          },
        },
        data: [{
          value: this.data.indicatorValue,
          name: 'XX',
          
        }
        ]
      }]
    });
  },
  openShare() {
    this.setData({
      show:!this.data.show
    })
  },
  backHome() {
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      "title": '我完成了“'+this.data.title +"”你也来评测一下吧！",
      "path": "/pages/home/home",
      "imageUrl" : "http://www.creater.ltd:8888/down/0LddMk46XM9Q",
    }
  }
});
