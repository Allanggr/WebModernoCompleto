function cardapio(codigo, quantidade){
    switch(codigo){
        case 100:
            return 3.00 * quantidade
            break
        case 200:
            return 4.00 * quantidade
            break
        case 300:
            return 5.50 * quantidade
            break
        case 400:
            return 7.50 * quantidade
            break
        case 500:
            return 3.50 * quantidade
            break
        case 600:
            return 2.80 * quantidade
            break
        default:
            return 'Produto não existente'
    }
}

console.log(cardapio(100, 5).toFixed(2))
console.log(cardapio(600, 2).toFixed(2))
console.log(cardapio(200, 3).toFixed(2))
console.log(cardapio(300, 2).toFixed(2))
console.log(cardapio(700, 1))