function planoSalarial(plano, salarioAtual){
    switch(plano){
        case 'A':
            return salarioAtual * 1.10
            break
        case 'B':
            return salarioAtual * 1.15
            break
        case 'C':
            return salarioAtual * 1.20
            break
        default:
            return 'Plano inválido!'
    }
}

console.log(planoSalarial('A', 1000))
console.log(planoSalarial('B', 1000))
console.log(planoSalarial('C', 1000))
console.log(planoSalarial('D', 1000))