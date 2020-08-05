function multiplicaVetor(vetor, numero){
    multiplicado = []
    vetor.forEach(numeroVetor =>{
        multiplicado.push(numeroVetor * numero)
    })
    return multiplicado
}

function multiplicaVetorSe(vetor, numero){
    multiplicado = []
    vetor.forEach(numeroVetor => {
        if(numeroVetor > 5){
            multiplicado.push(numeroVetor * numero)
        }
    })
    return multiplicado
}

const vetor = [1, 2, 3, 4, 5, 7, 8, 9, 10]
console.log(multiplicaVetor(vetor, 5))
console.log(multiplicaVetorSe(vetor, 5))
