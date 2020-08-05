function sacarDinheiro(valor){
    let contadorDe100 = 0
    let contadorDe50 = 0
    let contadorDe10 = 0
    let contadorDe5 = 0
    let contadorDe1 = 0
    
    let valorNota = calcularValorNota(valor)
    
    while(valor >= valorNota){
        switch(valorNota){
            case 100:
                valor -= 100
                contadorDe100++
                break
            case 50:
                valor -= 50
                contadorDe50++
                break
            case 10:
                valor -= 10
                contadorDe10++
                break
            case 5:
                valor -= 5
                contadorDe5++
                break
            case 1:
                valor -= 1
                contadorDe1++
                break
            
        }
        valorNota = calcularValorNota(valor)
    }
    return resultado(contadorDe100, contadorDe50, contadorDe10, contadorDe5, contadorDe1)

}

function calcularValorNota(valor){
    if(valor >= 100){
        return 100
    }else if (valor >= 50){
        return 50
    }else if (valor >= 10){
        return 10
    }else if (valor >= 5){
        return 5
    }else if (valor >= 1){
        return 1
    }
}

function resultado(contadorDe100, contadorDe50, contadorDe10, contadorDe5, contadorDe1){
    let resultado = ''
    if(contadorDe100 > 0){
        resultado += `${contadorDe100} nota(s) de R$ 100.`
    }

    if(contadorDe50 > 0){
        resultado += ` ${contadorDe50} nota(s) de R$ 50.`
    }

    if(contadorDe10 > 0){
        resultado += ` ${contadorDe10} nota(s) de R$ 10.`
    }

    if(contadorDe5 > 0){
        resultado += ` ${contadorDe5} nota(s) de R$ 5.`
    }

    if(contadorDe1 > 0){
        resultado += ` ${contadorDe1} nota(s) de R$ 1.`
    }

    return resultado
}

console.log(sacarDinheiro(541))

