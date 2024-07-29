class FinanceNotes {
    constructor (type, title, infos, date, valor) {
        this.type = type;
        this.title = title;
        this.infos = infos;
        this.date = date;
        this.valor = valor;
    }

    // função para validar dados
    validateData(){
        for (let i in this){
            if(this[i] === undefined || this[i] === ""){
                return false
            }
        }
        return true
    }
}

class DataBase {
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

    removeTask(id) {
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

export { FinanceNotes, DataBase };