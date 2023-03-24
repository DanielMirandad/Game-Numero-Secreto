const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeoChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <spam class="chute">${chute}</spam>
    `
}

recognition.addEventListener('end', () => recognition.start())