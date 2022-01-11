// фильтрация товаров по клику на "Товары со скидкой" , "Самые популярные" , "Новые поступления" и "Акционные товары"
function ready() {
    const nev = document.querySelector(".shop__new");
    const best = document.querySelector(".shop__best");
    const sale = document.querySelector(".shop__sale");
    const stock = document.querySelector(".shop__stock");
    const shop_head = document.querySelectorAll(".shop__heads_header");
    const lines = document.querySelectorAll(".shop__heads_line");

    shop_head[2].style.color = "#bb8c5f";
    lines[2].style.display = "block";
    shop_head.forEach((head) => {
        head.onclick = function () {
            shop_head.forEach((element) => {
                element.style.color = "#3e424b";
            });
            lines.forEach((element) => {
                element.style.display = "none";
            });
            event.target.style.color = "#bb8c5f";
            switch (event.target.textContent) {
                case "Товары со скидкой":
                    lines[0].style.display = "block";
                    sale.style.display = "block";
                    nev.style.display = "none";
                    stock.style.display = "none";
                    best.style.display = "none";
                    break;
                case "Самые популярные":
                    lines[1].style.display = "block";
                    sale.style.display = "none";
                    nev.style.display = "none";
                    stock.style.display = "none";
                    best.style.display = "block";
                    break;
                case "Новые поступления":
                    lines[2].style.display = "block";
                    sale.style.display = "none";
                    nev.style.display = "block";
                    stock.style.display = "none";
                    best.style.display = "none";
                    break;
                case "Акционные товары":
                    lines[3].style.display = "block";
                    sale.style.display = "none";
                    nev.style.display = "none";
                    stock.style.display = "block";
                    best.style.display = "none";
                    break;
            }
        };
    });
}

document.addEventListener("DOMContentLoaded", ready);