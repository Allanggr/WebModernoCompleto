function triangulo(lado1, lado2, lado3){
    if (lado1 == lado2 && lado2 == lado3){
        console.log('Equilátero')
    }else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        console.log('Isósceles')
    }else{
        console.log('Escaleno')
    }
}

triangulo(5, 7, 10)