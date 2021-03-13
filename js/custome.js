$(function () {
  //gnb 메뉴 클릭 이벤트
  $(".header_wrap .header .gnb li > a").click(function () {
    $(this).parent().siblings().removeClass();
    $(this).parent().addClass("selected");
  });

  //메뉴 버튼(.menu_btn) 클릭이벤트
  $(".header_wrap .menu_btn").click(function () {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
      $(".menu").removeClass("on");
    } else {
      $(this).addClass("on");
      $(".menu").addClass("on");
    }
  });

  //
  var play_slide = new Swiper(".play_slide", {
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    simulateTouch: false,
    autoplay: true,
    breakpoints: {
      768: {
        spaceBetween: 30,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".play_slide .play").click(function () {
    src = $(this).data("src");
    $(this)
      .parent(".swiper-slide")
      .append(
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
          src +
          '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div class="close"><i class="fi-rr-cross"></i></div>'
      );
    $(document).on("click", ".play_slide .close", function () {
      $(".play_slide iframe, .play_slide .close").remove();
      play_slide.slideNext();
    });
  });

  $(window).scroll(function () {
    curr = $(this).scrollTop();

    scrollani(".right_area", ".img01", 300);
    scrollani(".left_area", ".img02", 300);
    scrollani(".left_area .img02", ".img03", 300);
    scrollani(".right_area .txt_wrap .tit ", ".img04", 300);
  });

  /* 
  x = 시작태그의 offset 
  y = 타겟
  */
  function scrollani(x, y, z) {
    target = $(x).offset().top - z;
    if (curr >= target) {
      $(y).addClass("on");
    }
  }
  //product more_btn버튼 클릭이벤트
  $(".product_wrap ul li .product_model .more_btn").click(function () {
    $(this).parents("li").find(".porduct_info").toggleClass("on");
  });
});
