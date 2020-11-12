var articles = new Swiper('.posts-gallery', {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev'
  }
});

var comments = new Swiper('.feedbacks-gallery', {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev'
  }
});