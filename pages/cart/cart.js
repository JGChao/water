// pages/cart/cart.js
const app = getApp();
const host = app.globalData.host;
const token = app.globalData.token;
const imghost = app.globalData.imghost;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart:null,
    imghost:imghost,
    
  },
  // 获取数据
  getCart() {
    wx.request({
      url: host + 'api/shopcar',
      method:'GET',
      dataType: "json",
      header: {
        'token': token
      },
      success:(res)=>{
        this.setData({
          cart:res.data.data
        })
      }
    })
  },
  // 购物车加
  plusgoods(event){
    wx.showLoading({
      title: '',
    })
    let {gid,price,type} = event.target.dataset;
    wx:wx.request({
      url: host + 'api/shopcar/1',
      data: {gid,price,type},
      header: {
        'token': token
      },
      method: 'PUT',
      dataType: 'json',
      success:(res)=>{
        wx.hideLoading();
        let totalprice = this.data.cart.price + price * 1;
        let goods = this.data.cart.goods.filter(ele => ele.gid == gid)[0];
        let num = goods.num + 1;
        let index = this.data.cart.goods.findIndex(ele => ele.gid == gid);

        this.setData({
          'cart.price': totalprice,
          ['cart.goods[' + index + '].num']: num
        });
      },
      fail: function(res) {},
    })
  },
  // 购物车减
  reducegoods(event){
    wx.showLoading({
      title: '',
    })
    let { gid, price, type } = event.target.dataset;
    wx:wx.request({
      url: host + 'api/shopcar/2',
      data: { gid, price, type },
      header: {
        'token': token
      },
      method: 'PUT',
      dataType: 'json',
      success:(res)=>{
        wx.hideLoading()
        let totalprice = this.data.cart.price - price * 1;
        let goods = this.data.cart.goods.filter(ele => ele.gid == gid)[0];
        let num = goods.num - 1;
        let index = this.data.cart.goods.findIndex(ele => ele.gid == gid);
        if (num == 0) {
          let onegoods = this.data.cart.goods.filter(ele=>ele.gid != gid); 
          this.setData({
            'cart.price': totalprice,
            'cart.goods': onegoods
          })
        }else{
          this.setData({
            'cart.price': totalprice,
            ['cart.goods[' + index + '].num']: num
          });
        } 
      },
    })
  },

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
    this.getCart();
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