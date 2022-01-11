//выпадающее меню при нажатии "Меню" в шапке сайта, если пользователь просматривает сайт с узкого экрана
function ready() {
  const modal = document.querySelector(".modalmenu");
  const modal_one = document.querySelector(".modalmenu__one");
  const menu = document.querySelector(".header__menu");
  const btn = document.querySelector(".header__menu-btn");
  const btn_tri = document.querySelector(".modalmenu__ul-li");

  btn.style.backgroundImage = "url(/build/img/catalog-btn.svg)";

  const toggleMenu = () => {
    modal.classList.toggle("modalmenu-active");
    if (btn.style.backgroundImage == 'url("/build/img/catalog-btn.svg")') {
      btn.style.backgroundImage = 'url("/build/img/close.png")';
      btn.style.height = "24px";
    } else {
      btn.style.backgroundImage = 'url("/build/img/catalog-btn.svg")';
      btn.style.height = "14px";
    }
  };

  const toggleMenuOne = () => {
    modal_one.classList.toggle("modalmenu__one-active");
  };

  menu.addEventListener("click", () => toggleMenu());
  btn_tri.addEventListener("click", () => toggleMenuOne());
}

document.addEventListener("DOMContentLoaded", ready);
