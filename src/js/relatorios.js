import { DataBase } from "./database.js";

const database = new DataBase;

const totalGanhosPage = document.getElementById('totalGanhosPage');
const totalGastosPage = document.getElementById('totalGastosPage');
const totalGanhosRelatorio = document.getElementById('relatorio-ganhos');
const totalGastosRelatorio = document.getElementById('relatorio-gastos');
const totalSaldo = document.getElementById('relatorio-saldo');

const leitor = database.readerNotes()

let valoresGanhos = [];
let valoresGastos = [];

leitor.forEach((note) => {
    const { type, valor } = note.type
    if (type === 'ganho') {
        valoresGanhos.push(valor);
    } else if (type === 'gasto') {
        valoresGastos.push(valor);
    }
})

function somaValores(listValores) {
    let soma = 0;

    for (let i = 0; i < listValores.length; i++) {
        soma += Number(listValores[i]);
    }

    return soma;
}

if (totalGanhosPage) {
    const total = somaValores(valoresGanhos)
    totalGanhosPage.textContent = `Total R$ ${total.toFixed(2)}`
    
}

if (totalGastosPage) {
    const total = somaValores(valoresGastos)
    totalGastosPage.textContent = `Total R$ ${total.toFixed(2)}`
}

if (totalGanhosRelatorio) {
    const total = somaValores(valoresGanhos)
    totalGanhosRelatorio.textContent = `R$ ${total.toFixed(2)}`
}

if (totalGastosRelatorio) {
    const total = somaValores(valoresGastos)
    totalGastosRelatorio.textContent = `R$ ${total.toFixed(2)}`
}

if (totalSaldo) {
    const saldo = somaValores(valoresGanhos) - somaValores(valoresGastos);
    totalSaldo.textContent = `R$ ${saldo.toFixed(2)}`
}