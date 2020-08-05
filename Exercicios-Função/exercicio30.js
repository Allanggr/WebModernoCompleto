function maiorEMenor(vetor){
    let maior = vetor[0]
    let menor = vetor[0]

    vetor.forEach(verifica =>{
        if(verifica > maior){
            if( maior < menor){
                menor = maior
                maior = verifica
            }else{
                maior = verifica
            }
        }else if (verifica < menor){
            if( menor > maior){
                maior = maior
                menor = verifica
            }else{
                menor = verifica
            }
        }
    })
    console.log(`Maior número: ${maior}. Menor número: ${menor}`)

}


const vetor = [10, 50, 56, 9, 7, 27, 200, 53]
maiorEMenor(vetor)