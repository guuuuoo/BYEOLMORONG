// 헤더고정
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('#header').outerHeight();

    $(window).scroll(function (event) {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }

    }, 250);

    function hasScrolled() {
      var st = $(this).scrollTop();
      // Make sure they scroll more than delta
      if (Math.abs(lastScrollTop - st) <= delta)
        return;
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('#header').addClass('nav-up');
      } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
          $('#header').removeClass('nav-up');
        }
      }
      lastScrollTop = st;
    }

    // 배너 swiper
    var swiper1 = new Swiper(".main_bn", {
      navigation: {
        nextEl: ".main_bn .swiper-button-next",
        prevEl: ".main_bn .swiper-button-prev",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 100,
    });

    // 브랜드 소개
    AOS.init({
      duration: 2000,
      offset: 100,
      easing: 'ease-in-back',
    });

    // 시설소개
    var img_swiper = new Swiper(".fac_slide_R", {
      pagination: {
        el: ".fac_slide_R .swiper-pagination",
        Bullets: true,
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      slidesPerView: 1,
    });

    var text_swiper = new Swiper(".fac_slide_L", {
      clickable: true,
      loop: true,
      slidesPerView: 1,
    });

    img_swiper.controller.control = text_swiper;
    text_swiper.controller.control = img_swiper;

    // 예약안내
    var swiper3 = new Swiper(".date", {
      slidesPerView: 12,
    });


    $(function () {
      $(".btn").click(function () {
        $(this).toggleClass("btn_on");

      });

    });

    // 자주묻는질문
    $(function () {
			$(".main_qa li").click(function () {
				$(this).children("div").slideToggle()
				$(this).siblings().children("div").slideUp();
				$(this).toggleClass("qa_on").siblings().removeClass("qa_on")
			});
		});

    // 이용후기 스크롤
    $(function () { //on DOM ready 
      $("#scroller").simplyScroll({
        direction: 'backwards',
      });
    });
