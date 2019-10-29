// pages/list/list.js
const app = getApp();
const token = app.globalData.token;
const host = app.globalData.host;
const imghost = app.globalData.imghost;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    params:{
      page:0,
      limit:8,
      cid: 0,
    },
    imghost:imghost,
    cid:'',
    list:[],
  },
  getGoods() {
    this.data.params.page +1;
    wx.request({
      url: host + 'api/goods',
      data: this.data.params,
      method: "GET",
      dataType: "json",
      header: {
        'token': token
      },
      success: (res) => {
        let arr = res.data.data.concat(this.data.list)
       this.setData({
         list:arr,
       })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.params.cid = options.cid
    this.setData({
      cid:options.cid,
    })
    // this.getCategory();
    wx.startPullDownRefresh();
  
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
    this.getGoods()
    wx.stopPullDownRefresh();
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