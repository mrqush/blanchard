let swiper = new Swiper('.my-swiper', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper__next',
        prevEl: '.swiper__prev',
    },
    slidesPerGroup: 3,
});

const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
    searchEnabled: false,
    searchChoices: false,
    itemSelectText: '',
})

let accordion = document.getElementsByClassName('accordion__trigger');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('accordion__active');

        let content = this.nextElementSibling;
        if (content.classList.contains('accordion-content__item_active')) {
            content.classList.remove('accordion-content__item_active');
        } else {
            content.classList.add('accordion-content__item_active');
        }
        // content.classList.remove('accordion-content__item_active');
        // content.classList.toggle('accordion-content__item_active');
    });
}