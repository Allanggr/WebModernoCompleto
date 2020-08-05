function frutas(fruta){
    switch(fruta){
        case 'Maçã':
            return 'Não vendemos esta fruta aqui'
            break
        case 'Kiwi':
            return 'Estamos com escassez de Kiwi'
            break
        case 'Melancia':
            return 'Aqui está, são 3 Reais o kilo'
            break
        default:
            return 'Erro nesta fruta'
    }
}

console.log(frutas('Maçã'))
console.log(frutas('Kiwi'))
console.log(frutas('Melancia'))
console.log(frutas('Laranja'))