
function leituraParesEImpares(vetor){
    let impares = 0
    let pares = 0
    vetor.forEach(leitura =>{
        if(leitura % 2 == 0){
            pares++
        }else{
            impares++
        }
    } )
    console.log(`números impares: ${impares}. Números pares: ${pares}`)
}
const vetor = [16, 12, 27, 21, 30, 32]
leituraParesEImpares(vetor)