var mySwiper = new Swiper('.swiper-container', {
  speed: 300,
  slidesPerView: '1',
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // 添加页面样式
  pagination: {
    el: '.swiper-pagination', // 要识别为页面字符的类
    clickable: true, //单击“页面”按钮后移动る
    type: 'bullets', // 形状类型
  },
  on: { // 事件
    slideChange: () => { // 幻灯片更改后将发生事件
      if (mySwiper.realIndex > 0) {
        mySwiper.params.autoplay.delay = 2700;
      }
    }
  }
})