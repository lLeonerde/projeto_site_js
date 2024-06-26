document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('toggleSwitch').addEventListener('change', function() {
        var switchStatus = document.getElementById('switchStatus');
        
    
        if(this.checked){
            switchStatus.textContent = 'Auto';
            var quadrado = document.getElementById('quadrado');
            var velocidadeInput = document.getElementById('velocidade');
            var numeroAleatorioX = gerarNumeroAleatorio();
            var numeroAleatorioY = gerarNumeroAleatorio();
            var posX = 50; 
            var posY = 500; 
            var velocidadeX = parseInt(velocidadeInput.value * numeroAleatorioX); 
            var velocidadeY = parseInt(velocidadeInput.value * numeroAleatorioY); 
            var direcaoX = 1; 
            var direcaoY = 1; 

            function moverQuadrado() {
            
                posX += velocidadeX / 60 * direcaoX; 
                posY += velocidadeY / 60 * direcaoY;

                
                if (posX >= window.innerWidth - quadrado.offsetWidth) {
                    posX = window.innerWidth - quadrado.offsetWidth; 
                    direcaoX = -1;
                    velocidadeX = parseInt(velocidadeInput.value * gerarNumeroAleatorio());
                    velocidadeY = parseInt(velocidadeInput.value * gerarNumeroAleatorio()); 
                } else if (posX <= 0) {
                    posX = 0; 
                    direcaoX = 1; 
                    velocidadeX = parseInt(velocidadeInput.value * gerarNumeroAleatorio());
                    velocidadeY = parseInt(velocidadeInput.value * gerarNumeroAleatorio()); 
                }

                if (posY >= window.innerHeight - quadrado.offsetHeight) {
                    posY = window.innerHeight - quadrado.offsetHeight;
                    direcaoY = -1;
                    velocidadeX = parseInt(velocidadeInput.value * gerarNumeroAleatorio());
                    velocidadeY = parseInt(velocidadeInput.value * gerarNumeroAleatorio()); 
                } else if (posY-500 <= 0) {
                    posY = 500; 
                    direcaoY = 1; 
                    velocidadeX = parseInt(velocidadeInput.value * gerarNumeroAleatorio());
                    velocidadeY = parseInt(velocidadeInput.value * gerarNumeroAleatorio()); 
                }

        
                quadrado.style.left = posX + 'px';
                quadrado.style.top = posY + 'px';
                
                verificarColisao();

                requestAnimationFrame(moverQuadrado);
            }

            velocidadeInput.addEventListener('input', function() {
                velocidadeX = parseInt(velocidadeInput.value * numeroAleatorioX);
                velocidadeY = parseInt(velocidadeInput.value * numeroAleatorioY); 
            });
            
            function verificarColisao() {
                var parede = document.querySelector('.parede');
                var paredeRect = parede.getBoundingClientRect();
                var divMovelRect = quadrado.getBoundingClientRect();

                // Verifica se houve colisão
                if (paredeRect.right >= divMovelRect.left &&
                    paredeRect.left <= divMovelRect.right &&
                    paredeRect.bottom >= divMovelRect.top &&
                    paredeRect.top <= divMovelRect.bottom) {
                    direcaoX *= -1;
                    direcaoY *= -1;
                    velocidadeX = parseInt(velocidadeInput.value * gerarNumeroAleatorio());
                    velocidadeY = parseInt(velocidadeInput.value * gerarNumeroAleatorio()); 
                    // Aqui você pode adicionar o código para lidar com a colisão, se necessário
                } else {
                    console.log('Sem colisão.');
                }
            }

            moverQuadrado();
        }else{
            switchStatus.textContent = 'Mático';

            var quadrado = document.getElementById('quadrado');

            function moverQuadrado() {
            
                posX += velocidadeX / 60 * direcaoX; 
                posY += velocidadeY / 60 * direcaoY;

                
                if (posX >= window.innerWidth - quadrado.offsetWidth) {
                    posX = window.innerWidth - quadrado.offsetWidth; 
                    direcaoX = -1;
                    velocidadeX = parseInt(velocidadeInput.value * gerarNumeroAleatorio());
                    velocidadeY = parseInt(velocidadeInput.value * gerarNumeroAleatorio()); 
                } else if (posX <= 0) {
                    posX = 0; 
                    direcaoX = 1; 
                    velocidadeX = parseInt(velocidadeInput.value * gerarNumeroAleatorio());
                    velocidadeY = parseInt(velocidadeInput.value * gerarNumeroAleatorio()); 
                }

                if (posY >= window.innerHeight - quadrado.offsetHeight) {
                    posY = window.innerHeight - quadrado.offsetHeight;
                    direcaoY = -1;
                    velocidadeX = parseInt(velocidadeInput.value * gerarNumeroAleatorio());
                    velocidadeY = parseInt(velocidadeInput.value * gerarNumeroAleatorio()); 
                } else if (posY-500 <= 0) {
                    posY = 500; 
                    direcaoY = 1; 
                    velocidadeX = parseInt(velocidadeInput.value * gerarNumeroAleatorio());
                    velocidadeY = parseInt(velocidadeInput.value * gerarNumeroAleatorio()); 
                }

        
                quadrado.style.left = posX + 'px';
                quadrado.style.top = posY + 'px';
                
                verificarColisao();

                requestAnimationFrame(moverQuadrado);
            }

            function verificarColisao() {
                var parede = document.querySelector('.parede');
                var paredeRect = parede.getBoundingClientRect();
                var divMovelRect = quadrado.getBoundingClientRect();

                // Verifica se houve colisão
                if (paredeRect.right >= divMovelRect.left &&
                    paredeRect.left <= divMovelRect.right &&
                    paredeRect.bottom >= divMovelRect.top &&
                    paredeRect.top <= divMovelRect.bottom) {
                    direcaoX *= -1;
                    direcaoY *= -1;
                    velocidadeX = parseInt(velocidadeInput.value * gerarNumeroAleatorio());
                    velocidadeY = parseInt(velocidadeInput.value * gerarNumeroAleatorio()); 
                    // Aqui você pode adicionar o código para lidar com a colisão, se necessário
                } else {
                    console.log('Sem colisão.');
                }
            }

            velocidadeInput.addEventListener('input', function() {
                velocidadeX = parseInt(velocidadeInput.value * numeroAleatorioX);
                velocidadeY = parseInt(velocidadeInput.value * numeroAleatorioY); 
            });

            moverQuadrado()
        }
    });
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
    return false; 
}

function gerarNumeroAleatorio() {
    var numeroAleatorio = Math.floor(Math.random() * 5) + 1;
    return numeroAleatorio;
}

