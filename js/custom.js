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

  $(".links li a").on("click", function() {
    $(this)
      .parent()
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

  // smooth scroll to div

  $(".links li a").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top
      },
      1000
    );
  });

  // our auto slider code
  (function autoSlider() {
    $(".slider2 .active").each(function() {
      if (!$(this).is(":last-child")) {
        $(this)
          .delay(3000)
          .fadeOut(1000, function() {
            $(this)
              .removeClass("active")
              .next()
              .addClass("active")
              .fadeIn(1000);
            autoSlider();
          });
      } else {
        $(this)
          .delay(3000)
          .fadeOut(1000, function() {
            $(this).removeClass("active");
            $(".slider2 div")
              .eq(0)
              .addClass("active")
              .fadeIn(1000);
            autoSlider();
          });
      }
    });
  })();

  //adjust shuffle links

  $(".shuffle li").click(function() {
    $(this)
      .addClass("selected")
      .siblings()
      .removeClass("selected");
  });
});

//trigger mixItUp

var mixer = mixitup("#container");

var mixer = mixitup(containerEl, {
  selectors: {
    target: ".blog-item"
  },
  animation: {
    duration: 300
  }
});
