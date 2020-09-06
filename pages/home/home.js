// pages/about/about.js
// getApp()获取App()产生的实例对象
const app = getApp()
console.log(app.globalData.name);
console.log(app.globalData.age);

Page({
  handleGetUserInfo(event) {
    console.log(event);
    
  },
  /**
   * 页面的初始数据
   */
  data: {
    banner: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://152.136.185.210:8000/api/z8/home/multidata',
      success: (res) => {
        console.log(res);
        const banners = res.data.data.banner
        this.setData({
          banner: banners
        })
      }
    })
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