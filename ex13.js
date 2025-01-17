var time = [];

function adicionarJogador(nome, idade, posicao, pontuacao) {
    var jogador = { nome, idade, posicao, pontuacao };
    time.push(jogador);
}

function buscarPorPosicao(posicao) {
    var jogadoresPosicao = time.filter(jogador => jogador.posicao === posicao);
    var nomes = []
    jogadoresPosicao.forEach(obj => {nomes.push(obj.nome)})
    if (nomes.length > 0) {
        return nomes;
    } else {
        alert("Nenhum jogador encontrado para a posição informada.");
        return [];
    }
}

function listarTime() {
    var nomes = []
    time.forEach(obj => {nomes.push(obj.nome)})
    alert(`jogadores: ${nomes}`)
    time.forEach(jogador => console.log(jogador));
}

function calcularPontuacaoMedia() {
    if (time.length > 0) {
        var totalPontuacao = time.reduce((total, jogador) => total + jogador.pontuacao, 0);
        return totalPontuacao / time.length;
    } else {
        return 0;
    }
}

function iniciar() {
    while (true) {
        var opcao = parseInt(prompt("\nMenu:\n1 - Adicionar jogador\n2 - Buscar por posição\n3 - Listar time\n 4- Calcular pontuação média\n 5 - sair\n Escolha uma opção:"));

        switch (opcao) {
            case 1:
                var nome = prompt("Digite o nome do jogador: ");
                var idade = parseInt(prompt("Digite a idade do jogador: "));
                var posicao = prompt("Digite a posição do jogador: ");
                var pontuacao = parseInt(prompt("Digite a pontuação do jogador: "));
                adicionarJogador(nome, idade, posicao, pontuacao);
                break;
            case 2:
                var pos = prompt("Digite a posição para busca: ");
                var jogadores = buscarPorPosicao(pos);
                alert(`jogadores da posição ${pos} : ${jogadores}`)
                jogadores.forEach(jogador => console.log(jogador));
                break;
            case 3:
                listarTime();
                break;
            case 4:
                var media = calcularPontuacaoMedia();
                alert(`Pontuação média do time: ${media}`);
                break;
            case 5:
                alert("Encerrando o programa.");
                return;
            default:
                alert("Opção inválida.");
        }
    }
}

iniciar();
