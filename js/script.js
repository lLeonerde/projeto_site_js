document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('heroImage').addEventListener('click', function() {
        alert('Você clicou no Super Herói da Informática!');
    });

    document.getElementById('toggleSwitch').addEventListener('change', function() {
        var switchStatus = document.getElementById('switchStatus');
        if (switchStatus.checked) {
            switchStatus.textContent = 'Ligado';
        } else {
            switchStatus.textContent = 'Desligado';
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
    return false;  // Prevent form submission
}
