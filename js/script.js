document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('toggleSwitch').addEventListener('change', function() {
        var switchStatus = document.getElementById('switchStatus');
        if (this.checked) {
            switchStatus.textContent = 'Auto';
        } else {
            switchStatus.textContent = 'Mático';
        }
    });

    var quadrado = document.getElementById('quadrado');
    var velocidadeInput = document.getElementById('velocidade');
    
    var posX = 0; // posição inicial do quadrado
    var velocidade = parseInt(velocidadeInput.value); // velocidade inicial (pixels por segundo)

    function moverQuadrado() {
        // Calcula o próximo posição do quadrado
        posX += velocidade / 60; // dividido por 60 para ajustar à taxa de atualização do navegador (60 quadros por segundo)

        // Define a nova posição do quadrado
        quadrado.style.left = posX + 'px';

        // Chama a função novamente no próximo quadro
        requestAnimationFrame(moverQuadrado);
    }

    // Atualiza a velocidade quando o valor no input muda
    velocidadeInput.addEventListener('input', function() {
        velocidade = parseInt(velocidadeInput.value);
    });

    // Inicia o movimento do quadrado
    moverQuadrado();
});


document.addEventListener('DOMContentLoaded', function() {
    
});

function validarFormulario() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '' && num1 > 0 && num2 > 0) {
        alert('Por favor, insira números válidos.');
        return false;
    }

    var resultado = parseFloat(num1) + parseFloat(num2);
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
    return false;  // Prevent form submission
}
