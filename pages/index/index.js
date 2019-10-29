
const app = getApp();
const token = app.globalData.token;
const host = app.globalData.host;
const imghost = app.globalData.imghost;

Page({
  data: {
    imgUrls:[
      '/images/banner1.jpg',
      '/images/banner2.jpg',
      '/images/banner3.jpg'
    ],
    indicatoractivecolor:"#64C7FE",
    interval:"6000",
    circular:"true",
    category:[],
    imghost:imghost,
  },
  getCategory(){
    wx.request({
      url: host + 'api/category',
      data: {},
      method:"GET",
      dataType:"json",
      header: {
        'token': token 
      },
      success:(res)=>{
        this.setData({
          category : res.data.data 
        })
      }
    })
  },
  onLoad(){
    this.getCategory();
  }
})
