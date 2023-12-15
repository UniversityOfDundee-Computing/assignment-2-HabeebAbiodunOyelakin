// This code added functionality to the navbar
$('#menu-bar').click(function addToggle() {
  $('#menu-bar').toggleClass('fa-times');
  $('.header-menu').toggleClass('nav-toggle');
  $('.site-header').toggleClass('site-header-reduce')
})

//This code shrinks the header on scrolling 50px downward
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $('.site-header').addClass('small');
  } else {
    $('.site-header').removeClass('small');
  }
});