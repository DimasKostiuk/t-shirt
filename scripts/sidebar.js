(function () {
    const sidebar = document.querySelector('.sidebar');
    const openBtn = document.querySelector('.sidebar--open-img');
    const closeBtn = document.querySelector('.sidebar__close');

    openBtn.addEventListener('click', () => {
        sidebar.classList.remove('sidebar--close')
        sidebar.classList.add('sidebar--open')
    })

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('sidebar--open')
        sidebar.classList.add('sidebar--close')
    })
}());
