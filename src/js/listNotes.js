import { DataBase } from "./database.js";
const database = new DataBase()

const listDataGanhos = document.getElementById('listDataGanhos');
const listDataGastos = document.getElementById('listDataGastos');

function organizeDate(date) {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
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
            const { type, id } = NotesArmazenadas[i];
        
            const typeNote = type.type;
            const title = type.title;
            const infos = type.infos;
            const data = organizeDate(type.date);
            const valor = type.valor;
            
            if (typeNote === 'ganho' && listDataGanhos) {
                createElement(id, listDataGanhos, title, infos, data, valor);
            } else if (typeNote === 'gasto' && listDataGastos) {
                createElement(id, listDataGastos, title, infos, data, valor);
            }
            
        }
    }
}

readNotes()

function createElement(id, form, title, infos, data, valor) {
    const newElement = document.createElement('li');

    newElement.innerHTML = `
        <div class="item-description">
            <h3 class="item-descriptionTitle">${title}</h3>
            <p class="item-descriptionInfos">${infos}</p>
        </div>
    
        <p class="item-data">${data}</p>

        <span class="item-price">R$ ${valor}</span>

        <div>
            <button class="item-edit" data-id="${id}">
                <img class="item-button" src="../../assets/imgs/icons/penEdit.svg" alt="Editar">
            </button>
            <button class="item-delete" data-id="${id}">
                <img class="item-button" src="../../assets/imgs/icons/trash.svg" alt="Deletar">
            </button>
        </div>
    `;

    newElement.classList.add('lista-item');

    form.appendChild(newElement);
}

function deleteElement (id) {
    database.removeNote(id)
    location.reload()
}

const buttonsDelete = document.querySelectorAll('.item-delete')

buttonsDelete.forEach(button => {
    button.addEventListener('click', (event) => {
        const noteId = event.currentTarget.getAttribute('data-id');
        deleteElement(noteId);
    });
});


// CRIAR FUNÇÃO DE APAGAR TODO O TIPO (CRIAR FUNÇÃO DE PEGAR O LOCALSOTRAGE, FILTRAR E DEVOLVER)