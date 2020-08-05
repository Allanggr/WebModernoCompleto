function bhaskara(a, b, c){
    let resultados = []
    let delta = (b ** 2) - (4 * a * c)
    if(delta < 0){
        return 'delta é negativo!'
    }
    let x1 = ((-b) + Math.sqrt(delta)) / (2 * a)
    let x2 = ((-b) - Math.sqrt(delta)) / (2 * a)
    resultados.push(x1)
    resultados.push(x2)
    return resultados
}

console.log(bhaskara(2, 5, 3))