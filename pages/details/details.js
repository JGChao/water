// pages/details/details.js
const app = getApp();
const host = app.globalData.host;
const token = app.globalData.token;
const imghost = app.globalData.imghost;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsone:[],
    params:{
      gid: 0
    },
    indicatoractivecolor: "#64C7FE",
    interval: "6000",
    circular: "true",
    goodsimg:[],
    imghost:imghost,
  },
  getonegoods(){
    let gid = this.data.params.gid;
    wx.request({
      url: host + 'api/goods'+'/'+ gid,
      method:'GET',
      dataType:'json',
      header: {
        'token': token
      },
      data:{},
      success:(res)=>{
        let result = res.data.data;
        this.setData({
          goodsone:result,
          goodsimg:result.gbanner.split(","),  
        })
      }
    })
  },
  // 购物车添加商品
  addcart(event){
    wx:wx.showLoading({
      title: '',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    let gid = event.target.dataset.gid;
    let price = event.target.dataset.price;
    wx.request({
      url:  host + 'api/shopcar',
      method:'POST',
      dataType:'json',
      header: {
        'token': token
      },
      data:{gid,price},
      success:(res)=>{
        wx:wx.hideLoading()
        if(res.data.code == 200){
          wx.showToast({
            title: '商品添加成功',
          })
        }
      }
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.params.gid = options.gid;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getonegoods();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})