class FinanceNotes {
    constructor (id, title, infos, date, valor) {
        this.id = id;
        this.title = title;
        this.infos = infos;
        this.date = date;
        this.valor = valor;
    }

    // função para validar dados
}

class DataBase {
    constructor(){
        const id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }
    }

    createFinanceNote(financeNote) {
        localStorage.setItem(financeNote.id, JSON.stringify(financeNote))
    }

    removeTask(id) {
        localStorage.removeItem(id)
    }

    resetAll() {
        localStorage.clear()
    }
}

const newNote = new FinanceNotes(1, 'teste', 'infosteste', '14-07-05', 1500);
const newNote2 = new FinanceNotes(2, 'teste', 'infosteste', '14-07-05', 1500);

const newData = new DataBase()

// newData.resetAll()

newData.createFinanceNote(newNote)
newData.createFinanceNote(newNote2)

// newData.removeTask(1)

// ATÉ AQUI TUDO CERTO, LOCALSTORAGE MANTEM EM TODAS AS PÁGINAS