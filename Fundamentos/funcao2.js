// armazenando uma função em uma variável

const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Amazenando uma função arrow em uma variável

const imprimirArrow =  (a, b) =>{
    return a + b
}

console.log(imprimirArrow(2, 3))

// Retorno implícito

const subtracao = (a, b) => a - b
console.log(subtracao(10, 3))

const imprimir2 = a => console.log(a)
imprimir2("Texto!!!!@!!")