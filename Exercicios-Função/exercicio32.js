function media(vetor){
    let soma = 0
    vetor.forEach(numero =>{
        soma += numero
    })

    return soma / vetor.length
}

const vetor = [1, 55, 37, 21, 6, 0, 48, 63]
console.log(media(vetor).toFixed(2))