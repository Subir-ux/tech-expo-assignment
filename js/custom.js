(function ($) {
  ("use strict");
  //Call the variable
  let win = $(window);

  //Function callback
  $(document).ready(function () {
    toggleMobileNavigation();
    scrollToBottom();
    scrollToTop();
  });

  // Toggle mobile navigation

  function toggleMobileNavigation() {
    var navbar = $(".navigation-holder");
    var openBtn = $(".navbar-header .open-btn");
    var hamburgerToggleBtn = $(".site-header .navbar-toggler");

    openBtn.on("click", function (e) {
      e.stopImmediatePropagation();
      navbar.toggleClass("slideInn");
      hamburgerToggleBtn.toggleClass("x-close");
      $("body").toggleClass("overflow-hidden");
      return false;
    });
  }

  //WHEN DOCUMENT LOADING
  $(window).on("load", function () {
    toggleMobileNavigation();
  });

  //WHEN WINDOW RESIZE
  $(window).on("resize", function () {
    clearTimeout($.data(this, "resizeTimer"));
    $.data(
      this,
      "resizeTimer",
      setTimeout(function () {
        toggleMobileNavigation();
      }, 200)
    );
  });

  //Sticky Header

  let stickyHeader = $(".scrollStickyheader");
  win.on("scroll", function () {
    let scroll = win.scrollTop();
    if (scroll < 100) {
      stickyHeader.removeClass("sticky-header");
    } else {
      stickyHeader.addClass("sticky-header");
    }
  });

  // Scroll to bottom

  function scrollToBottom() {
    $("#scrollToBottom").on("click", function () {
      $("html, body").animate({ scrollTop: $(document).height() }, 1200);
      return false;
    });
  }

  // Scroll to top
  function scrollToTop() {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        $(".myButton").fadeIn(250);
      } else {
        $(".myButton").fadeOut(250);
      }
    });
    $(".myButton").click(function () {
      $("html,body").animate({ scrollTop: 0 }, 400);
    });
  }
})(window.jQuery);
