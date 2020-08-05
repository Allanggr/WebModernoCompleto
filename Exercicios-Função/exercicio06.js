function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao){
    let juros = capitalInicial * (taxaDeJuros/100)* tempoDeAplicacao
    this.montante = capitalInicial + juros
    return this.montante
}

function jurosComposto(capitalInicial, taxaDeJuros, tempoDeAplicacao){
    return capitalInicial * (1 + (taxaDeJuros/100)) ** tempoDeAplicacao
}

console.log(jurosSimples(1200, 2.5, 10))
console.log(jurosComposto(2000, 2, 12).toFixed(2))