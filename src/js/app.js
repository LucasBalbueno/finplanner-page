import { DataBase } from "./database.js";
import { FinanceNotes } from "./financeNotes.js";

const buttonOpen = document.getElementById('buttonAdd');
const btnClose = document.getElementById('btnClose');
const modalForms = document.getElementById('formsApp');

const formGanhos = document.getElementById('formAppGanhos');
const formGastos = document.getElementById('formAppGastos');

// function Abre o forms
function openModal () {
    modalForms.classList.add('formActivated');
}

// function fecha o forms
function closeModal () {
    modalForms.classList.remove('formActivated');

    clearInputs()
}
if (buttonOpen && btnClose) {
    buttonOpen.addEventListener('click', openModal)
    btnClose.addEventListener('click', closeModal)
}

// Funcação para pegar os inputs na DOM baseado no name
function getInputs() {
    return {
        title: document.querySelector('[name="title"]'),
        infos: document.querySelector('[name="infos"]'),
        date: document.querySelector('[name="data"]'),
        valor: document.querySelector('[name="valor"]')
    }
}

// função para limpar os inputs
function clearInputs() {
    const inputs = getInputs();

    inputs.title.value = '';
    inputs.infos.value = '';
    inputs.date.value = '';
    inputs.valor.value = '';
}

// Função para pegar os valores do inputs
function getValueForm(idForm) {
    const inputs = getInputs();

    let type;

    if (idForm === "formAppGanhos") {
        type = 'ganho'
    } else {
        type = 'gasto'
    }

    const title = inputs.title.value;
    const infos = inputs.infos.value;
    const date = inputs.date.value;
    const valor = inputs.valor.value;

    if (!title || !infos || !date || !valor) {
        alert('Por favor, preencha todos os campos para concluir a ação.');
    } else {
        return {type, title, infos, date, valor }
    }
}

const dataBase = new DataBase();

if (formGanhos) {
    formGanhos.addEventListener('submit', (event) => {
        event.preventDefault()

        if (event.submitter.name === 'btnSubmitGanhos') {
            const formInfos = getValueForm(event.target.id)

            const newForm = new FinanceNotes(formInfos)

            dataBase.createFinanceNote(newForm)
        }

        location.reload()
        closeModal()
    }
)}

if (formGastos) {
    formGastos.addEventListener('submit', (event) => {
        event.preventDefault()
        
        if (event.submitter.name === 'btnSubmitGastos') {
            const formInfos = getValueForm(event.target.id)
            
            const newForm = new FinanceNotes(formInfos)
            
            dataBase.createFinanceNote(newForm)
        }
        
        location.reload()
        closeModal()
    }
)}