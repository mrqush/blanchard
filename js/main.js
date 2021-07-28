let swiper = new Swiper('.my-swiper', {
    slidesPerView: 3,
    direction: 'horizontal',
    slidesPerColumn: 2,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
    searchEnabled: false,
    searchChoices: false,
    itemSelectText: '',
})
