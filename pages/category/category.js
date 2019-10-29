// pages/category/category.js
const app = getApp();
const host = app.globalData.host;
const token = app.globalData.token;
const imghost = app.globalData.imghost;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      '/images/banner1.jpg',
      '/images/banner2.jpg',
      '/images/banner3.jpg'
    ],
    indicatoractivecolor: "#64C7FE",
    interval: "6000",
    circular: "true",
    params:{
      cid:0,
      page:1,
      limit:8
    },
    imghost: imghost,
    // type
    CategoryType: 0,
    // 一级分类
    categoryLeave:[],
    // 分类下商品
    categoryGoods:[],
  },
  // 获取一级分类
  getcategoryLeave(){
    wx.request({
      url: host + 'api/category',
      data: {},
      method: "GET",
      dataType: "json",
      header: {
        'token': token 
      },
      success:(res)=>{
        this.setData({
          categoryLeave: res.data.data
        });
      }
    })
  },
  // 获取分类商品
  getcategoryGoods() {
    wx.request({
      url: host + 'api/goods',
      data: this.data.params,
      method: "GET",
      dataType: "json",
      header: {
        'token': token 
      },
      success: (res) => {
        this.setData({
          categoryGoods: res.data.data
        });
      }
    })
  },
  // 获取全部商品
  getgoods(){
    let cid = 0;
    wx.request({
      url: host + 'api/goods',
      data: {
        cid,
        limit:9,
        page:1
      },
      method: "GET",
      dataType: "json",
      header: {
        'token': token
      },
      success: (res) => {
        this.setData({
          categoryGoods: res.data.data
        });
      }
    })
  },

  // 点击分类栏目
  chaneCategory(event){
    let cid = event.target.dataset.cid;
    this.data.params.cid = cid;
    if (this.data.CategoryType == cid){
      return;
    }
    this.setData({
      CategoryType: cid,
    })
    this.getcategoryGoods();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getcategoryLeave();
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
    this.getgoods();

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