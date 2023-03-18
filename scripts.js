function insert(num) {
    let numero = document.getElementById('input-text').value;
    if (num == '+' || num == '-' || num == '*' || num == '/') {
        if (numero.charAt(numero.length - 1) == '+' || numero.charAt(numero.length - 1) == '-' || numero.charAt(numero.length - 1) == '*' || numero.charAt(numero.length - 1) == '/') {
            alert("Voce nao pode colocar mais de 1 vez o mesmo sinal seguidos.");
            document.getElementById('input-text').value = numero;
        } else {
            document.getElementById('input-text').value = numero + num;
        }

    } else {
        document.getElementById('input-text').value = numero + num;
    }
    console.log('sucess2')
}

function somar() {
    let numero = document.getElementById('input-text').value;
    if (numero) {
        document.getElementById('input-text').value = eval(numero);
    } else {
        alert("Nao ha sinais na expressao para ser somado.");
        document.getElementById('input-text').value = '';
    }
}

function clean() {
    document.getElementById('input-text').value = '';
    console.log('sucess')
}
