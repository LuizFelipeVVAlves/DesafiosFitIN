function verificarIdades(anosNascimento, anoAtual) {
    var resultados = anosNascimento.map(ano => {
        var idade = anoAtual - ano;
        return idade >= 18 ? "maior" : "menor";
    });
    return resultados;
}

var anosNascimento = [2000, 2005, 2010, 1995];
var anoAtual = parseInt(prompt("Digite o ano atual: "));
var resultados = verificarIdades(anosNascimento, anoAtual);

resultados.forEach((resultado, index) => {
    console.log(`Pessoa ${index + 1}: ${resultado} de idade`);
});