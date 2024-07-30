const valorIn = document.getElementById('valorIn');
const codeIn = document.getElementById('codeIn');
const codeOut = document.getElementById('codeOut');
const valorOut = document.getElementById('valorOut');
const conversorButton = document.getElementById('conversorButton');

async function requestApi (codeIn, codeOut) {
    const url = `https://economia.awesomeapi.com.br/json/${codeIn}-${codeOut}`

    try {
        const response = await fetch(url, {
            method: 'GET'
        })

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`)
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error(`Erro ao buscar dados da API: ${error}`)

        alert('Essa conversão não pode ser realizada, tente outra!')
    }
}

function calcularConversao (data) {
    const { high } = data[0];
    const valorConvertido = valorIn.value * high;
    return valorConvertido.toFixed(2)
}

if (conversorButton) {
    conversorButton.addEventListener('click', async (event) => {
        event.preventDefault();

        if (!valorIn.value || codeIn.value === 'select' || codeOut.value === 'select') {
            alert('Insira as informações completas para converter as moedas!')
        } else {
            if (codeIn.value === codeOut.value) {
                alert('As Moedas não podem ser as mesmas!')
                return
            }

            try {
                const data = await requestApi(codeIn.value, codeOut.value);
                valorOut.textContent = `R$ ${calcularConversao(data)}`;
            } catch (error) {
                console.error(`Erro ao buscar dados da API: ${error}`);
            }
        }
        
        valorIn.value = ''
        codeIn.value = 'select'
        codeOut.value = 'select'
    });
}