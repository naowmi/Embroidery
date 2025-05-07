const button = document.querySelector('.mobile-menu-open-icon');
const modalIcon = document.querySelector('.mobile-menu');
const closeBtnMenu = document.querySelector('.mobile-menu-btn-close')

button.addEventListener('click', () => {
    modalIcon.classList.add('is-open');
});

closeBtnMenu.addEventListener('click', () => {
    modalIcon.classList.remove('is-open')
});


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.order-button');
    const select = document.getElementById('product-select');

    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault(); 

        const product = button.getAttribute('data-product');

        if (select) {
          for (const option of select.options) {
            if (option.value === product) {
              select.value = product;
              break;
            }
          }

          select.scrollIntoView({ behavior: 'smooth', block: 'center' });

          select.focus();
        }
      });
    });
  });