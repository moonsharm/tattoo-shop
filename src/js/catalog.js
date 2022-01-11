//выпадающее меню при нажатии "Каталог" в шапке сайта, если пользователь просматривает сайт с большого экрана
function ready() {
  const catalog = document.querySelector(".header__catalog");
  const btn = document.querySelector(".header__catalog-btn");
  const modal = document.querySelector(".modalcat");
  const modal_headers = document.querySelectorAll(".modalcat__heads-h");
  const modal_headers_lines = document.querySelectorAll(".modalcat__heads_line");
  const catalog_header = document.querySelector(".header__catalog-text");
  const modal_categorie = document.querySelector(".modalcat__categorie");
  const modal_brand = document.querySelector(".modalcat__brand");

  let left = catalog.getBoundingClientRect().left + window.pageXOffset;
  modal.style.left = `${left}px`;

  modal.style.display = "none";
  catalog.onclick = function () {
    if (modal.style.display == "none") {
      btn.style.backgroundImage = "url(/build/img/close.png)";
      btn.style.height = "24px";
      modal.style.display = "block";
      catalog_header.style.color = "#bb8c5f";
    } else {
      btn.style.backgroundImage = "url(/build/img/catalog-btn.svg)";
      btn.style.height = "14px";
      modal.style.display = "none";
      catalog_header.style.color = "#faf6f2";
    }
  };

  modal_headers[0].style.color = "#bb8c5f";
  modal_headers_lines[0].style.display = "block";
  modal_headers.forEach((head) => {
    head.onclick = function () {
      if (event.target.textContent == "По категории") {
        event.target.style.color = "#bb8c5f";
        modal_headers[1].style.color = "#3e424b";
        modal_headers_lines[0].style.display = "block";
        modal_headers_lines[1].style.display = "none";
        modal.style.width = "618px";
        modal_categorie.style.display = "flex";
        modal_brand.style.display = "none";
      } else {
        event.target.style.color = "#bb8c5f";
        modal_headers[0].style.color = "#3e424b";
        modal_headers_lines[1].style.display = "block";
        modal_headers_lines[0].style.display = "none";
        modal.style.width = "1183px";
        modal_categorie.style.display = "none";
        modal_brand.style.display = "flex";
      }
    };
  });

  function resizeFunc() {
    left = catalog.getBoundingClientRect().left;
    modal.style.left = `${left}px`;
  }
  window.addEventListener("resize", resizeFunc);

}

document.addEventListener("DOMContentLoaded", ready);
