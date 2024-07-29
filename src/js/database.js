class FinanceNotes {
    constructor (title, infos, date, valor) {
        this.title = title;
        this.infos = infos;
        this.date = date;
        this.valor = valor;
    }
}

class DataBase {
    createFinanceNote(financeNote) {
        localStorage.setItem('ganhos', financeNote)
    }
}

const newNote = new FinanceNotes(('teste', 'infosteste', '14-07-05', 1500));

const newData = new DataBase()

newData.createFinanceNote(newNote)

// ATÉ AQUI TUDO CERTO, LOCALSTORAGE MANTEM EM TODAS AS PÁGINAS