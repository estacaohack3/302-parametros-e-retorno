function calcularMedia(vetor){
    let soma = 0;

    for(let numero of vetor){
        soma += numero;
    }

    return soma / vetor.length;
}

let meuVetorBunito = [9, 5, 2, 7];

let media = calcularMedia(meuVetorBunito);

console.log(media * 2);