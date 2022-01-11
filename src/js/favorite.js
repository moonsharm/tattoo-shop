// при нажатии на сердечко у товара, в шапке сайта подсвечивается сердечко
function ready() {
  const likes = document.querySelectorAll(".card__top_like");
  const favorite = document.querySelector(".header__user_favourite");
  let likesCount = 0;
  likes.forEach((like) => {
    like.style.backgroundImage = "url(/build/img/like-card.png)";
  });
  likes.forEach((like) => {
    like.onclick = function () {
      if (
        event.target.style.backgroundImage == 'url("/build/img/like-card.png")'
      ) {
        event.target.style.backgroundImage = 'url("/build/img/like-card1.png")';
        likesCount++;
      } else {
        event.target.style.backgroundImage = 'url("/build/img/like-card.png")';
        likesCount--;
      }
      if (likesCount > 0) {
        favorite.style.backgroundImage = 'url("/build/img/like-cardFill.png")';
      } else {
        favorite.style.backgroundImage = 'url("/build/img/heart.svg")';
      }
    };
  });
}

document.addEventListener("DOMContentLoaded", ready);
