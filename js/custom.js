$(function() {
  "use strict";

  //    adjust header height

  var myHeader = $(".header"),
    mySlider = $(".slider");
  myHeader.height($(window).height());
  $(window).resize(function() {
    myHeader.height($(window).height());

    // adjust bx slider list center

    mySlider.each(function() {
      $(this).css(
        "paddingTop",
        ($(window).height() - $(".slider li").height()) / 2
      );
    });
  });

  // add active class on links

  $(".links li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  // adjust bx slider list center
  mySlider.each(function() {
    $(this).css(
      "paddingTop",
      ($(window).height() - $(".slider li").height()) / 2
    );
  });

  // trriger bx slider
  mySlider.bxSlider({
    pager: false
  });
});
