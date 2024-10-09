document.getElementById('calcular').addEventListener('click', calcularIMC);

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');

    // Validação
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    // Classificação do IMC
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
        classificacao = 'Obesidade grau 1';
    } else if (imc < 39.9) {
        classificacao = 'Obesidade grau 2';
    } else {
        classificacao = 'Obesidade grau 3';
    }

    // Exibir resultado
    resultadoDiv.innerHTML = `Seu IMC é: ${imc.toFixed(2)} - Classificação: ${classificacao}`;
    resultadoDiv.classList.remove('oculto');
    resultadoDiv.classList.add('aparecer');
}

// Reseta o resultado ao limpar o formulário
document.getElementById('imcForm').addEventListener('reset', () => {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.add('oculto');
    resultadoDiv.innerHTML = '';
});
