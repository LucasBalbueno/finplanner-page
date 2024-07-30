export class DataBase {
    constructor(){
        const id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }
    }

    createFinanceNote(financeNote) {
        const id = nextId()
        localStorage.setItem(id, JSON.stringify(financeNote))
        localStorage.setItem('id', id)
    }

    readerNotes(){
        const notes = [];

        const id = localStorage.getItem('id')

        for (let i = 0; i <= id; i++){
            const note = JSON.parse(localStorage.getItem(i));

            if (note === null) {
                continue
            }

            note.id = i;
            notes.push(note)
        }
        return notes
    }

    removeNote(id) {
        localStorage.removeItem(id)
    }

    resetAll() {
        localStorage.clear()
    }
}

function nextId () {
    const id = localStorage.getItem('id');
    return parseInt(id) + 1;
}

const database = new DataBase()

// FAZER FUNÇÃO DE FILTRAR LISTA

// database.removeNote(2)
// database.resetAll()