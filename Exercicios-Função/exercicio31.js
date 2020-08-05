function verificaNegativo(vetor){
    let qtdNegativos = []
    vetor.forEach(negativo =>{
        if (negativo < 0){
            qtdNegativos.push(negativo)
        }
    })
    return qtdNegativos
}

const vetor = [10, -5, -3, 7, 25, 100, -33]
console.log(verificaNegativo(vetor))