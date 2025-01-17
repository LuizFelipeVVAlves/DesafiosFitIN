function converterMoeda(valorReais) {
    var taxaEuro = 6.10;
    var taxaDolar = 5.70;
    var valorEuro = valorReais / taxaEuro;
    var valorDolar = valorReais / taxaDolar;
    return { valorEuro, valorDolar };
}

var valorReais = parseFloat(prompt("Digite o valor em reais (R$): "));
var { valorEuro, valorDolar } = converterMoeda(valorReais);
console.log(`Valor em reais: R$${valorReais.toFixed(2)}`);
console.log(`Valor em euros: €${valorEuro.toFixed(2)}`);
console.log(`Valor em dólares americanos: US$${valorDolar.toFixed(2)}`);
