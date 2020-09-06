// pages/wxml/wxml.js
Page({
  data: {
    message: "猪八戒",
    time: new Date().toLocaleString(),
    isShow: true,
    movies: ["猪八戒", "孙悟空"]
  },

  numberToFixed(number) {
    return number.numberToFixed(2)
  },

  onLoad() {
    setInterval(() => {
      this.setData({
        time: new Date().toLocaleString()
      })
    }, 1000)
  }
})