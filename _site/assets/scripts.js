jQuery( document ).ready(function($){
  // Smoooooth scrolling
  $('.smooth-scroll').on("click", function(){
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });

  // var $h1 = $('.brand').height() + 30;
  // var $h2 = $('header').height();
  // var $m1 = $h2-$h1;
  // $("header").css("margin-top", -$m1);

  var $hamburger = $('.hamburger');
  $hamburger.on("click", function(){
    $hamburger.toggleClass("is-active");
    $('.navbar').toggleClass("menu-open");
  });

});
