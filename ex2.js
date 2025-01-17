function calcularFatorial(n) {
    var fatorial = 1;
    for (var i = 1; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}

var continuar = true;

while (continuar) {
    var n = parseInt(prompt("Digite um número inteiro positivo: "));
    if(n % 1 != 0 || n < 0){
        alert("Só é permitido números inteiros positivos")
    }else{

        alert(`Fatorial de ${n} é ${calcularFatorial(n)}`);
        var resposta = prompt("Quer calcular o fatorial de outro número? (S/N): ");
        if (resposta.toLowerCase() !== "s") {
            continuar = false;
        }
    }

}
