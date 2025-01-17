function verificarOrdemCrescente(vetor) {
    var contagem = 0;
    for (var i = 1; i < vetor.length; i++) {
        if (vetor[i] > vetor[i - 1]) {
            contagem += 1;
        }
    }
    return contagem;
}

var quantidade = parseInt(prompt("Quantos números deseja inserir no vetor? "));
var vetor = [];
for (var i = 0; i < quantidade; i++) {
    var numero = parseInt(prompt("Digite um número: "));
    vetor.push(numero);
}

var contagem = verificarOrdemCrescente(vetor);
console.log(`Números em ordem crescente em relação ao anterior: ${contagem}`);