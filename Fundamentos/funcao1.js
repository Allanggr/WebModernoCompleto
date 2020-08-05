// função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 6, 5, 4, 3)
imprimirSoma()

// função com retorno

function retornaSoma(a , b = 1){
    return a + b
}

console.log(retornaSoma(2, 3))
console.log(retornaSoma(2))
console.log(retornaSoma())