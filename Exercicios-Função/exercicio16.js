function calculadora(numero1, operacao, numero2){
    switch(operacao){
        case '+':
            return numero1 + numero2
            break
        case '-':
            return numero1 - numero2
            break
        case '*':
            return numero1 * numero2
            break
        case '/':
            return numero1 / numero2
            break
        default:
            return 'operação inválida'
    }
}

console.log(calculadora(2, '+', 3))
console.log(calculadora(5, '-', 1))
console.log(calculadora(10, '*', 5))
console.log(calculadora(10, '/', 2))
console.log(calculadora(20, 'a', 2))