const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroSecreto()

function gerarNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número Secreto:', numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerText = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerText = maiorValor
