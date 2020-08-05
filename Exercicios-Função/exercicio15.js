function modeloCarro(carro){
    switch(carro){
        case 'Hatch':
            return 'Compra efetuada com sucesso!'
            break
        case 'Sedan':
        case 'Motocicleta':
        case 'Caminhonete':
            return 'Você tem certeza que prefere este modelo?'
            break
        default:
            return 'Não trabalhamos com este tipo de modelo aqui!'
    }
}

console.log(modeloCarro('Sedan'))
console.log(modeloCarro('Hatch'))
console.log(modeloCarro('Tank'))