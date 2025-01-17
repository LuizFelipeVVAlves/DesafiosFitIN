function verificarPalindromo(frase) {
    frase = frase.replace(" ", "").toLowerCase();
    return frase === frase.split("").reverse().join("");
}

var frase = prompt("Digite uma frase: ");
if (verificarPalindromo(frase)) {
    console.log("A frase é um palíndromo.");
} else {
    console.log("A frase não é um palíndromo.");
}
