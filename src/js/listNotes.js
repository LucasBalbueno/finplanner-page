import { DataBase } from "./database.js";
const database = new DataBase()

const listDataGanhos = document.getElementById('listDataGanhos');
const listDataGastos = document.getElementById('listDataGastos');

function organizeDate(date) {
    return date.replace(/-/g, '/');
}

const NotesArmazenadas = database.readerNotes();
const lastId = localStorage.getItem('id')

function readNotes () {
    if (listDataGanhos) {
        listDataGanhos.innerHTML = '';
    }

    if (listDataGastos) {
        listDataGastos.innerHTML = '';
    }

    for (let i = 0; i <= lastId; i++) {
        if (NotesArmazenadas[i]) {
            const { type } = NotesArmazenadas[i];
            
            const typeNote = type.type;
            const title = type.title;
            const infos = type.infos;
            const data = organizeDate(type.date);
            const valor = type.valor;
            
            if (typeNote === 'ganho' && listDataGanhos) {
                createElement(listDataGanhos, i, title, infos, data, valor);
            } else if (typeNote === 'gasto' && listDataGastos) {
                createElement(listDataGastos, i, title, infos, data, valor);
            }
            
        }
    }
}

readNotes()

function createElement(form, id, title, infos, data, valor) {
    const newElement = document.createElement('li');

    newElement.innerHTML = `
        <div class="item-description">
            <h3 class="item-descriptionTitle">${title}</h3>
            <p class="item-descriptionInfos">${infos}</p>
        </div>
    
        <p class="item-data">${data}</p>

        <span class="item-price">R$ ${valor}</span>

        <div>
            <button class="item-edit" data-id="${id + 1}">
                <img class="item-button" src="../../assets/imgs/icons/penEdit.svg" alt="Editar">
            </button>
            <button class="item-delete" data-id="${id + 1}">
                <img class="item-button" src="../../assets/imgs/icons/trash.svg" alt="Deletar">
            </button>
        </div>
    `;

    newElement.classList.add('lista-item');

    form.appendChild(newElement);
}

// FUNÇÃO PARA DELETAR DO LOCALSTORAGE E DEPOIS RELER O LOCALSTORAGE

// ERRO: NAO ESTÁ RESETANDO A PÁGINA
function deleteElement (id) {
    database.removeNote(id)
    readNotes()
}

deleteElement(6)