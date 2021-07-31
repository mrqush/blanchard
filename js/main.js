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

let tabsTriggers = [];

document.querySelectorAll('.tabs__trigger').forEach((tabsTrigger) => {
    tabsTriggers.push(tabsTrigger);
    tabsTrigger.addEventListener('click', (e) => {
        const path = e.currentTarget.dataset.path;
        for(let item of tabsTriggers) {
            item.classList.remove('tabs__trigger_active');
        }
        document.querySelectorAll('catalog__person').forEach((tabContent) => {
            tabContent.classList.remove('catalog__person_active');
        })

        document.querySelector(`[data-path="${path}"]`).classList.add('tabs__trigger_active');
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__person_active');
    })
})

const accordion = document.getElementsByClassName('accordion__trigger');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        let status = this.classList.contains('accordion__active') ? 'opened' : 'closed';

        for (let item of accordion) {
            item.classList.remove('accordion__active');
            let content = item.nextElementSibling;
            let arrow = item.firstElementChild;
            content.classList.remove('accordion__content_active');
            arrow.classList.remove('trigger__arrow_active');
        }
        if (status === 'closed') {
            this.classList.add('accordion__active');
            this.nextElementSibling.classList.add('accordion__content_active');
            this.firstElementChild.classList.add('trigger__arrow_active');
        }
    });
}