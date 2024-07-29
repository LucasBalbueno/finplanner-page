export class FinanceNotes {
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