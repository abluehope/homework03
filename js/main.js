$(function () {
  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    if (sct > 0) {
      $(".to_top").addClass("on");
    } else {
      $(".to_top").removeClass("on");
    }
  });

  $(".main_slide").on("init afterChange", function (e, s, c) {
    const current = $(".main_slide .slick-current");
    current.addClass("on").siblings().removeClass("on");

    $(".main_visual .menu li").eq(0).addClass("on");
    $(".main_visual .menu li")
      .eq(c)
      .addClass("on")
      .siblings()
      .removeClass("on");
  });

  $(".main_slide").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $(".main_visual .menu li").on("click", function (e) {
    e.preventDefault();
    const idx = $(this).index(); // 0, 1, 2
    $(".main_slide").slick("slickGoTo", idx);
  });

  $(".pic_slide").slick({
    // 슬라이드 두개 엮기
    arrows: false,
    asNavFor: ".txt_slide",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".txt_slide").slick({
    dots: true,
    arrows: false,
    vertical: true,
    asNavFor: ".pic_slide",
  });

  $(".news .arrows .arrows_left").on("click", function () {
    $(".txt_slide").slick("slickPrev");
  });
  $(".news .arrows .arrows_right").on("click", function () {
    $(".txt_slide").slick("slickNext");
  });

  $(".to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });
});
