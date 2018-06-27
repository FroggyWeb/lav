$(document).ready(function($) {

  $('.slider--main').slick({
    infinite: true,
    speed: 500,
    fade: false,
    prevArrow: '<a class="slick-prev"></a>',
    nextArrow: '<a class="slick-next"></a>'
  });

  $('.prod-color-slider').slick({
    infinite: false,
    speed: 500,
    fade: false,
    prevArrow: '<a class="slick-prev"></a>',
    nextArrow: '<a class="slick-next"></a>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {breakpoint: 480, settings: {slidesToShow: 1}},
      {breakpoint: 600, settings: {slidesToShow: 2}}
    ]
  });
});
