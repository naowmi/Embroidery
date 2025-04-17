document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.mobile-menu-open-icon');
    const modalIcon = document.querySelector('.mobile-menu');
    const closeBtnMenu = document.querySelector('.mobile-menu-btn-close');

    if (button && modalIcon && closeBtnMenu) {
        button.addEventListener('click', () => {
            modalIcon.classList.add('is-open');
        });

        closeBtnMenu.addEventListener('click', () => {
            modalIcon.classList.remove('is-open');
        });
    } else {
        console.warn('Один з елементів не знайдено в DOM.');
    }
});