function imc() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const form = document.querySelector('form');
    const resultado = document.getElementById('resultado');
    form.onsubmit = function(evento) {
        evento.preventDefault();
    }
    if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0 ) {
        const imc = peso / (altura  * altura);
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;
        resultado.style.display = 'block';
        resultado.style.backgroundColor = 'white';
    }
    else {
        resultado.innerHTML = 'Preencha os Campos Corretamente';
        resultado.style.display = 'block';
        resultado.style.color ='black';
        resultado.style.backgroundColor ='red';
    }
}
imc();