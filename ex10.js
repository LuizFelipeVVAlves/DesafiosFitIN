

var clientes = [];

while (true) {
    alert("\nMenu:\n1 - Novo Cliente\n2 - Atender Cliente\n3 - Sair") 
    var opcao = parseInt(prompt("Escolha uma opção: "));
    if (opcao === 1) {
        var nome = prompt("Digite o nome do cliente: ");
        clientes.push(nome);
    } else if (opcao === 2) {
        if (clientes.length > 0) {
            var cliente = clientes.shift();
            alert(`Atendendo cliente: ${cliente}`);
        } else {
            alert("Nenhum cliente na fila.");
        }
    } else if (opcao === 3) {
        break;
    } else {
        alert("Opção inválida.");
    }
    alert(`fila de espera: ${clientes}`);
}