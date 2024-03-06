(function () {

    const elem = document.querySelector('.products__list');
    const iso = new Isotope(elem, {
        // options
        itemSelector: '.products__item',
    });


    const controll = document.querySelectorAll('.filter__link');
    const active = 'filter__item--active'

    controll.forEach((control) => {
        control.addEventListener('click', (e) => {
            e.preventDefault();

            const filterName = control.getAttribute('data-filter');

            controll.forEach((t) => {
                t.closest('.filter__item').classList.remove(active)
            });
            control.closest('.filter__item').classList.add(active);

            iso.arrange({
                filter: `.${filterName}`
            })
        })
    })

}())