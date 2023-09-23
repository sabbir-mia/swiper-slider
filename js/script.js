$(document).ready(function(){
    const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
})