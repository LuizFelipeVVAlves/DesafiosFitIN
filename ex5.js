function fizzbuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return "fizzbuzz";
    } else if (n % 3 === 0) {
        return "fizz";
    } else if (n % 5 === 0) {
        return "buzz";
    } else {
        return "";
    }
}

var n = parseInt(prompt("Digite um número inteiro: "));
console.log(fizzbuzz(n));
