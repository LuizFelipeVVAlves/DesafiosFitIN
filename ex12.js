function encontrarElementoUnico(vetor) {
    const contagem = {};

    // Contar a ocorrência de cada número no vetor
    for (const num of vetor) {
        if (contagem[num] === undefined) {
            contagem[num] = 1;
        } else {
            contagem[num]++;
        }
    }

    // Encontrar o número que aparece apenas uma vez
    for (const num in contagem) {
        if (contagem[num] === 1) {
            return parseInt(num);
        }
    }

    // Caso não haja elemento único
    return null;
}

// Exemplo de uso
const vetor = [1, 2, 3, 2, 1];
const elementoUnico = encontrarElementoUnico(vetor);
console.log(`Elemento único no vetor: ${elementoUnico}`);
