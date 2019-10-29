// pages/login/login.js
const app = getApp();
const host = app.globalData.host;
const token = app.globalData.token;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {
      "username": '',
      "password": ''
    }
  },
  successlogin(){
    let from = this.data,form;
    console.log(from)
    wx.request({
      url: host + 'admin/login',
      data: {
        from
      },
      method: "POST",
      dataType: "json",
      header: {
        'Authorization': token 
      },
      success: (res) => {
        
       
      }
    })
  },
  // changetype(e){
  //   let order_data = this.data.form;
  //   let data_type = e.target.dataset.type;
  //   let value = e.detail.value;
  //   order_data[data_type] = value;
  //   this.setData({
  //     'orderData': order_data
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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