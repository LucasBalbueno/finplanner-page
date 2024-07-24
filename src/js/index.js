import './observer.js';

// const subscribeButtonHome = document.getElementById('subscribe-button-home');
// const subscribeButtonApresentation = document.getElementById('subscribe-button-apresentation');

// const modalButtonClose = document.getElementById('subscribe-button-close');
// const modal = document.getElementById('modal');

// subscribeButtonHome.addEventListener('click', modalOpen);
// subscribeButtonApresentation.addEventListener('click', modalOpen);

// modalButtonClose.addEventListener('click', modalClose);

// function modalOpen () {
//     modal.classList.add('modalOpen');
// };

// function modalClose () {
//     modal.classList.remove('modalOpen');
// };

// const subscribeButtonSubmit = document.getElementById('subscribe-button-submit');

// subscribeButtonSubmit.addEventListener('click', (event) => {
//     event.preventDefault();

//     alert('Seu cadastro foi realizado com sucesso! Preencha o formulário de contato para ficar por dentro das novidades.');
// })

// const contactButtonSubmit = document.getElementById('contact-button-submit');

// contactButtonSubmit.addEventListener('click', (event) => {
//     event.preventDefault();

//     alert('Seus dados foram recebidos com sucesso! Manteremos você atualizado das novidades através do meio de comunicação escolhido.');
// });

window.addEventListener('scroll', () => {
    const header = document.getElementById('cabecalho');

    header.classList.toggle('headerScroll', window.scrollY > 0);
});

const planButtons = document.getElementsByClassName('table-prices-button');

Array.from(planButtons).forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Novo plano selecionado com sucesso!');
        console.log('teste');
    });
});