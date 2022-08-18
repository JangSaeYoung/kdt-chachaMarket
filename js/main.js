
const subMenu = document.querySelector('#snb .sub_menu');
const snbBtn = document.querySelector('#snb .btn_menu');
const modal = document.querySelector('.modal_bg');

snbBtn.addEventListener('click', function () {
  if (subMenu.classList.contains('hide')) {
    subMenu.classList.remove('hide');
    modal.classList.add('hide');
  } else {
    subMenu.classList.add('hide');
    modal.classList.remove('hide');
  }
});

const swiperPapper = new Swiper('.papper .swiper', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.papper .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.papper .swiper-button-prev',
    nextEl: '.papper .swiper-button-next',
  },
});
