import './observer.js';
import './swiper.js'
import './app.js'
import './listNotes.js'
import './relatorios.js'
import './conversor.js'
import './toggleTheme.js'

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

const menuHamburguer = document.getElementsByClassName('menuHamburguer')[0];
const buttonHambuguer = document.getElementsByClassName('menuHamburguer-button')[0];

function toggleMenu () {
    menuHamburguer.classList.toggle('menuToggle');
}

if (buttonHambuguer) {
    buttonHambuguer.addEventListener('click', toggleMenu)
}