function planoDeSaude(idade){
    const valor = 100
    if (idade <= 10){
        return valor + 80
    }else if(idade <= 30){
        return valor + 50
    }else if(idade <= 60){
        return valor + 95
    }else{
        return valor + 130
    }
}

console.log(planoDeSaude(6))
console.log(planoDeSaude(15))
console.log(planoDeSaude(37))
console.log(planoDeSaude(80))