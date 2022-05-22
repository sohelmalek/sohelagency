$(function () {
    var header = $(".navbar");
  
    $(window).scroll(function () {
      if ($(this).scrollTop() > 10) {
        $(header).addClass('header_scroll');
      } else {
        $(header).removeClass('header_scroll');
      }
    });
  
  });
  
  $(document).ready(function () {
    $(".navbar-toggler").click(function () {
      $(".offcanvas-collapse").toggleClass("open");
      // $("body").toggleClass("offscroll");
    });
      $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
      });
      $(".navbar-nav li a").click(function(){
        $(".navbar-collapse").removeClass("open");
      // $("body").toggleClass("offscroll");
  
      });
  
    
  });