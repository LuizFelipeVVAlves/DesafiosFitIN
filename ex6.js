function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

var n = parseInt(prompt("Digite o número de termos da sequência de Fibonacci: "));
for (var i = 0; i < n; i++) {
    console.log(fibonacci(i));
}
