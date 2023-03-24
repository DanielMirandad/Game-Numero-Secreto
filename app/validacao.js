function verificaSeoChutePossuiUmValorValido(chute) { 
    const numero = +chute;


    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
        
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += ` 
        <div>Valor inválido! O numero deve estar entre ${menorValor} e ${maiorValor}</div>;
        `
    }

    if (numero === numeroSecreto) {
        document.body.innerHtml = `
            <h2>Parabéns, você acertou!</h2>
            <h3>O número secreto é ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">
            Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) { 
            elementoChute.innerHTML += `
            <div>O número secreto é menor <i class=”fa-solid fa-down-long”></i></div>
        `
    } else {
            elementoChute.innerHTML += `
            <div>O número secreto é maior <i class=”fa-solid fa-up-long”></i></div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()   
    }
})
