let stringPontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let records = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            records++
        }else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [records, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))