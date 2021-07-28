document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        width: '350px',
        height: '350px',
        perPage: 3,
        rewind: true,
        // padding: 10,
        classes: {
            // arrows: 'splide__arrows your-class-arrows',
            arrow: 'splide__arrow',
            prev: 'splide__arrow--prev',
            next: 'splide__arrow--next',

            pagination: 'splide__pagination your-class-pagination', // container
            page: 'splide__pagination__page your-class-page', // each button
        },
        // arrowPath: '0',
    }).mount();
});

const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
    searchEnabled: false,
    searchChoices: false,
    itemSelectText: '',
})

// new Splide( '.splide' ).mount();