
// 이벤트 슬라이드
var evt_swiper = new Swiper(".event_slide", {
  navigation: {
    nextEl: ".evt-box2 .swiper-button-next",
    prevEl: ".evt-box2 .swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  clickable: true,
  loop: true,
  slidesPerView: 2,
});


// 시설소개
var img_swiper = new Swiper(".fac_slide_R", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar"
  },
  on: {
    slideChange: function () {
      const currentSlide = this.realIndex + 1;
      const totalSlides = this.slides.length;
      document.querySelector('.fac-counter').textContent = `${currentSlide} / ${totalSlides}`;
    }
  },
  clickable: true,
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


// 예약안내1
var res_img_swiper = new Swiper(".res-top-R", {
  navigation: {
    nextEl: ".res-top .swiper-button-next",
    prevEl: ".res-top .swiper-button-prev",
  },
  loop: true,
  slidesPerView: 1,
  observer: true,
  observeParents: true,
});

var res_text_swiper = new Swiper(".res-top-L-box", {
  loop: true,
  slidesPerView: 1,
  observer: true,
  observeParents: true,
});

res_img_swiper.controller.control = res_text_swiper;
res_text_swiper.controller.control = res_img_swiper;

// 예약안내2
$(function () {
  let startDate, endDate;
  $("#daterange").datepicker({
    dateFormat: "mm.dd(D)",
    minDate: new Date(2025, 6, 1),
    maxDate: new Date(2025, 6, 31),
    beforeShowDay: function (date) {
      const days = ['일', '월', '화', '수', '목', '금', '토'];
      const dayName = days[date.getDay()];
      return [true, "", dayName];
    },
    onSelect: function (dateText, inst) {
      const date = $(this).datepicker('getDate');
      if (!startDate || endDate) {
        startDate = date;
        endDate = null;
        const days = ['일', '월', '화', '수', '목', '금', '토'];
        const startStr = `${String(startDate.getMonth() + 1).padStart(2, '0')}.${String(startDate.getDate()).padStart(2, '0')}${days[startDate.getDay()]}`;
        $(this).val(startStr);
        $('#date-summary').text('');
      } else {
        endDate = date;
        if (endDate < startDate) {
          [startDate, endDate] = [endDate, startDate];
        }
        const nights = (endDate - startDate) / (1000 * 60 * 60 * 24);
        const days = ['일', '월', '화', '수', '목', '금', '토'];
        const startStr = `${String(startDate.getMonth() + 1).padStart(2, '0')}.${String(startDate.getDate()).padStart(2, '0')}(${days[startDate.getDay()]})`;
        const endStr = `${String(endDate.getMonth() + 1).padStart(2, '0')}.${String(endDate.getDate()).padStart(2, '0')}(${days[endDate.getDay()]})`;
        $("#daterange").val(`${startStr} ~ ${endStr}`);
        $('#date-summary').text(nights > 0 ? ` (${nights}박)` : '');
      }
    }
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
