function adicionarAoVetor(pilha, adiciona){
    adiciona.forEach(adicionar =>{
        pilha.push(adicionar)
        console.log(adicionar)
    })
    console.log(`Vetor Adicionado: ${adiciona}`)
    console.log(`Vetor pilha: ${pilha}`)
}

const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

adicionarAoVetor(vetorPilha, vetorAdiciona)