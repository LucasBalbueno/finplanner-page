import './observer.js';
import './swiper.js'
import './app.js'
import './listNotes.js'
import './relatorios.js'

window.addEventListener('scroll', () => {
    const header = document.getElementById('cabecalho');

    header.classList.toggle('headerScroll', window.scrollY > 0);
});

const planButtons = document.getElementsByClassName('table-prices-button');

Array.from(planButtons).forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Novo plano selecionado com sucesso!');
    });
});