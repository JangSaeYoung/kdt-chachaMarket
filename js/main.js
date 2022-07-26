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
