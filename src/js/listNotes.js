import { DataBase } from "./database.js";
const database = new DataBase()

const listDataGanhos = document.getElementById('listDataGanhos');
const listDataGastos = document.getElementById('listDataGastos');

const NotesArmazenadas = database.readerNotes();

const lastId = localStorage.getItem('id')

for (let i = 0; i <= lastId; i++) {
    if (NotesArmazenadas[i]) {
        const { type } = NotesArmazenadas[i];

        const typeNote = type.type;
        const title = type.title;
        const infos = type.infos;
        const data = organizeDate(type.date);
        const valor = type.valor;

        if (typeNote === 'ganho' && listDataGanhos) {
            createElement(listDataGanhos, title, infos, data, valor);
        } else if (typeNote === 'gasto' && listDataGastos) {
            createElement(listDataGastos, title, infos, data, valor);
        }

    } else {
        console.warn(`Note at index ${i} is undefined`);
    }
}

// função para criar elemento HTML de acordo com as informações recebidas
function createElement(form, title, infos, data, valor) {
    const newElement = document.createElement('li');

    newElement.innerHTML = `
        <div class="item-description">
            <h3 class="item-descriptionTitle">${title}</h3>
            <p class="item-descriptionInfos">${infos}</p>
        </div>
    
        <p class="item-data">${data}</p>

        <span class="item-price">R$ ${valor}</span>

        <div>
            <img id="item-edit" class="item-button" src="../../assets/imgs/icons/penEdit.svg" alt="Editar">
            <img id="item-delete" class="item-button" src="../../assets/imgs/icons/trash.svg" alt="Deletar">
        </div>
    `;

    newElement.classList.add('lista-item')

    form.appendChild(newElement);
}

function organizeDate(date) {
    return date.replace(/-/g, '/')
}