//выбор способа контакта по нажати. на "Viber", "Telegram", "Whats App"
function ready() {
  const links = document.querySelectorAll(".header__social_text");
  const icon = document.querySelector(".header__social_icon");
  const text = document.querySelector(".header__social_main");

  links[1].style.color = "#bb8c5f";
  links.forEach((element) => {
    element.onclick = function () {
      changeBlock();
    };
  });

  function changeBlock() {
    links.forEach((element) => {
      element.style.color = "#faf6f2";
    });
    event.target.style.color = "#bb8c5f";

    if (event.target.textContent == "Telegram") {
      changeInfo('@mrdriskell', 'telegram')
    } else if (event.target.textContent == "Whats App") {
      changeInfo('+7 952 659-03-03', 'whatsapp')
    } else {
      changeInfo('+7 952 552-52-52', 'viber')
    }
  }

  function changeInfo(name, bg) {
    text.textContent = `${name}`;
    icon.style.backgroundImage = `url(/build/img/${bg}.png)`;

  }
}

document.addEventListener("DOMContentLoaded", ready);
