// pages/about/about.js
Page({
  data: {
    movies: ['海贼王','火影','死神']
  },
  handleClick() {
    console.log("点击"); 
  },
  handleTouchStart() {
    console.log("handleTouchStart");
    
  },
  handleTouchMove() {
    console.log("handleTouchMove");
    
  },
  handleTouchEnd() {
    console.log("handleTouchEnd");
    
  },
  handleTap() {
    console.log("handleTap");
    
  },
  handleLongpress() {
    console.log("handleLongpress");
    
  },
  handleEventClick(event) {
    console.log(event);    
  },
  handleItemClick(event) {
    console.log(event);
    
  },

  // 事件冒泡和事件捕获
  handleCaptureView1() {
    console.log("handleCaptureView1");
    
  },
  handleCaptureView2() {
    console.log("handleCaptureView2");
    
  },
  handleCaptureView3() {
    console.log("handleCaptureView3");
    
  }
})