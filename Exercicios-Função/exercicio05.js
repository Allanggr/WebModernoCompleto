function formatar(valor){
    valorFormatado = `R$ ${valor.toFixed(2).toString().replace('.', ',')}`
    console.log(valorFormatado)
}

formatar(0.1 + 0.2)
