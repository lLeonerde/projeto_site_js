document.addEventListener('DOMContentLoaded', function() {
    var quadrado = document.getElementById('quadrado');
    var velocidadeInput = document.getElementById('velocidade');
    var switchStatus = document.getElementById('switchStatus');
    var movimentoAutomatico = false; // Estado inicial
    var posX = 50;
    var posY = 500;
    var velocidadeX = 0;
    var velocidadeY = 0;
    var direcaoX = 1;
    var direcaoY = 1;

    function moverQuadradoAutomatico() {
        var numeroAleatorioX = gerarNumeroAleatorio();
        var numeroAleatorioY = gerarNumeroAleatorio();
        velocidadeX = parseInt(velocidadeInput.value * numeroAleatorioX); 
        velocidadeY = parseInt(velocidadeInput.value * numeroAleatorioY); 

        function mover() {
            posX += velocidadeX / 60 * direcaoX; 
            posY += velocidadeY / 60 * direcaoY;

            if (posX >= window.innerWidth - quadrado.offsetWidth) {
                posX = window.innerWidth - quadrado.offsetWidth; 
                direcaoX = -1;
                atualizarVelocidade();
            } else if (posX <= 0) {
                posX = 0; 
                direcaoX = 1; 
                atualizarVelocidade();
            }

            if (posY >= window.innerHeight - quadrado.offsetHeight) {
                posY = window.innerHeight - quadrado.offsetHeight;
                direcaoY = -1;
                atualizarVelocidade();
            } else if (posY <= 500) {
                posY = 500; 
                direcaoY = 1; 
                atualizarVelocidade();
            }

            quadrado.style.left = posX + 'px';
            quadrado.style.top = posY + 'px';

            verificarColisao();

            if (movimentoAutomatico) {
                requestAnimationFrame(mover);
            }
        }

        velocidadeInput.addEventListener('input', function() {
            velocidadeX = parseInt(velocidadeInput.value * numeroAleatorioX);
            velocidadeY = parseInt(velocidadeInput.value * numeroAleatorioY); 
        });

        function verificarColisao() {
            var parede = document.querySelector('.parede');
            var paredeRect = parede.getBoundingClientRect();
            var divMovelRect = quadrado.getBoundingClientRect();

            if (paredeRect.right >= divMovelRect.left &&
                paredeRect.left <= divMovelRect.right &&
                paredeRect.bottom >= divMovelRect.top &&
                paredeRect.top <= divMovelRect.bottom) {
                direcaoX *= -1;
                direcaoY *= -1;
                atualizarVelocidade();
            }
        }

        function atualizarVelocidade() {
            velocidadeX = parseInt(velocidadeInput.value * gerarNumeroAleatorio());
            velocidadeY = parseInt(velocidadeInput.value * gerarNumeroAleatorio());
        }

        mover();
    }

    function moverQuadradoManual(event) {
        var passo = 10;
        switch (event.key) {
            case 'ArrowUp':
                posY -= passo;
                break;
            case 'ArrowDown':
                posY += passo;
                break;
            case 'ArrowLeft':
                posX -= passo;
                break;
            case 'ArrowRight':
                posX += passo;
                break;
            default:
                return; 
        }

        if (posX < 0) posX = 0;
        if (posX > window.innerWidth - quadrado.offsetWidth) posX = window.innerWidth - quadrado.offsetWidth;
        if (posY < 500) posY = 500;
        if (posY > window.innerHeight - quadrado.offsetHeight) posY = window.innerHeight - quadrado.offsetHeight;

        quadrado.style.left = posX + 'px';
        quadrado.style.top = posY + 'px';

        function verificarColisao() {
            var parede = document.querySelector('.parede');
            var paredeRect = parede.getBoundingClientRect();
            var divMovelRect = quadrado.getBoundingClientRect();

            if (paredeRect.right >= divMovelRect.left &&
                paredeRect.left <= divMovelRect.right &&
                paredeRect.bottom >= divMovelRect.top &&
                paredeRect.top <= divMovelRect.bottom) {

                var overlapX = Math.min(divMovelRect.right - paredeRect.left, paredeRect.right - divMovelRect.left);
                var overlapY = Math.min(divMovelRect.bottom - paredeRect.top, paredeRect.bottom - divMovelRect.top);

                if (overlapX < overlapY) {
                    if (divMovelRect.left < paredeRect.left) {
                        posX -= overlapX;
                    } else {
                        posX += overlapX;
                    }
                } else {
                    if (divMovelRect.top < paredeRect.top) {
                        posY -= overlapY;
                    } else {
                        posY += overlapY;
                    }
                }

                quadrado.style.left = posX + 'px';
                quadrado.style.top = posY + 'px';
            }
            
        }


        verificarColisao();
    }

    document.getElementById('toggleSwitch').addEventListener('change', function() {
        if (this.checked) {
            switchStatus.textContent = 'Auto';
            movimentoAutomatico = true;
            moverQuadradoAutomatico();
        } else {
            switchStatus.textContent = 'Mático';
            movimentoAutomatico = false;
        }
    });

    document.addEventListener('keydown', function(event) {
        if (!movimentoAutomatico) {
            moverQuadradoManual(event);
        }
    });
});

function validarFormulario() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
        alert('Por favor, insira números válidos.');
        return false;
    }

    var resultado = parseFloat(num1) + parseFloat(num2);
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
    return false; 
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 3) + 3;
}
