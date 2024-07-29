const buttonOpen = document.getElementById('buttonAdd');
const btnClose = document.getElementById('btnClose');
const modalForms = document.getElementById('formsApp');

const formGanhos = document.getElementById('formAppGanhos');
const formGastos = document.getElementById('formAppGastos');

// Abre o forms
buttonOpen.addEventListener('click', (event) => {
    event.preventDefault();
    modalForms.classList.add('formActivated');
});

// Fecha o forms
btnClose.addEventListener('click', (event) => {
    event.preventDefault();
    modalForms.classList.remove('formActivated');

    clearInputs()
});

// Funcação para pegar os inputs na DOM baseado no name
function getInputs () {
    return {
        title: document.querySelector('[name="title"]'),
        infos: document.querySelector('[name="infos"]'),
        date: document.querySelector('[name="data"]'),
        valor: document.querySelector('[name="valor"]')
    }
}

// função para limpar os inputs
function clearInputs () {
    const inputs = getInputs();

    inputs.title.value = '';
    inputs.infos.value = '';
    inputs.date.value = '';
    inputs.valor.value = '';
}