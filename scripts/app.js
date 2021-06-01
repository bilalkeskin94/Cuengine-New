document.addEventListener('DOMContentLoaded', function () {
  new Splide('#card-slider-2', {
    perPage: 1,
    type: 'loop',
    height: 400,
    breakpoints: {
      600: {
        perPage: 1,
      },
    },
  }).mount();
});
