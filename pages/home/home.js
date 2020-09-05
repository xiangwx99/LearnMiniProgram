// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'coderwhh',
    age: 12,
    students: [
      {id: 1, name: "猪八戒", age: 10},
      {id: 2, name: "孙悟空", age: 11},
      {id: 3, name: "沙和尚", age: 12}
    ],
    counter: 0
  },

  addCounter() {
    // 1.错误: 界面是不会刷新的
    // this.data.counter++  

    // 2.this.setData
    this.setData({
      counter: this.data.counter + 1
    })
  },

  subcounter() {
    this.setData({
      counter: this.data.counter - 1
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