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
    var numeroAleatorioX = gerarNumeroAleatorio();
    var numeroAleatorioY = gerarNumeroAleatorio();
    var posX = 50; // posição inicial do quadrado no eixo X
    var posY = 500; // posição inicial do quadrado no eixo Y
    var velocidadeX = parseInt(velocidadeInput.value * numeroAleatorioX); // velocidade inicial no eixo X (pixels por segundo)
    var velocidadeY = parseInt(velocidadeInput.value * numeroAleatorioY); // velocidade inicial no eixo Y (pixels por segundo)
    var direcaoX = 1; // direção inicial do movimento no eixo X (1 para direita, -1 para esquerda)
    var direcaoY = 1; // direção inicial do movimento no eixo Y (1 para baixo, -1 para cima)

    function moverQuadrado() {
        // Calcula a próxima posição do quadrado baseada na velocidade e direção nos eixos X e Y
        posX += velocidadeX / 60 * direcaoX; // dividido por 60 para ajustar à taxa de atualização do navegador (60 quadros por segundo)
        posY += velocidadeY / 60 * direcaoY;

        // Verifica se o quadrado atingiu os limites da janela no eixo X
        if (posX >= window.innerWidth - quadrado.offsetWidth) {
            posX = window.innerWidth - quadrado.offsetWidth; // ajusta a posição para o limite direito
            direcaoX = -1; // reverte a direção no eixo X
        } else if (posX <= 0) {
            posX = 0; // ajusta a posição para o limite esquerdo
            direcaoX = 1; // reverte a direção no eixo X
        }

        // Verifica se o quadrado atingiu os limites da janela no eixo Y
        if (posY >= window.innerHeight - quadrado.offsetHeight) {
            posY = window.innerHeight - quadrado.offsetHeight;
            direcaoY = -1; // reverte a direção no eixo Y
        } else if (posY <= 0) {
            posY = 0; // ajusta a posição para o limite superior
            direcaoY = 1; // reverte a direção no eixo Y
        }

        // Define a nova posição do quadrado
        quadrado.style.left = posX + 'px';
        quadrado.style.top = posY + 'px';
        

        


        // Chama a função novamente no próximo quadro
        requestAnimationFrame(moverQuadrado);
    }

    // Atualiza a velocidade quando o valor no input muda
    velocidadeInput.addEventListener('input', function() {
        velocidadeX = parseInt(velocidadeInput.value); // atualiza a velocidade no eixo X
        velocidadeY = parseInt(velocidadeInput.value); // atualiza a velocidade no eixo Y
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

function gerarNumeroAleatorio() {
    var numeroAleatorio = Math.floor(Math.random() * 5) + 1;
    return numeroAleatorio;
}

function gerarRecursivo() {
    var numero = gerarNumeroAleatorio();
    console.log('Número aleatório após 10 segundos:', numero);

    // Chama a função novamente após 10 segundos
    setTimeout(function() {
        var resultado = gerarRecursivo();
        return resultado;
    }, 10000); // 10000 milissegundos = 10 segundos

    return numero; // Retorna o número imediatamente após ser gerado
}