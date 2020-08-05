function intervalo(vetor){
    let dentro = 0
    let fora = 0
    for(let i = 0; i < vetor.length; i++){
        if (vetor[i] >= 10 && vetor[i] <= 20){
            dentro++
        }else{
            fora++
        }
    }
    console.log(`Números dentro: ${dentro}. Número fora: ${fora}`)
}

const vetor = [10, 15, 11, 20, 68, 70, 1, 3, 33, 19, 77]
intervalo(vetor)