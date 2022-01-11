document.addEventListener("DOMContentLoaded", function () {
  const indicators = document.querySelectorAll(".slider__indicator");
  const arrows = document.querySelectorAll(".slider__control");

  if (window.innerWidth >= 1244) {
    var slider = new SimpleAdaptiveSlider(".slider", {
      autoplay: true,
      interval: 4000,
      swipe: false,
    });
  } else {
    var slider = new SimpleAdaptiveSlider(".slider", {
      autoplay: false,
      swipe: false,
    });
  }
});
