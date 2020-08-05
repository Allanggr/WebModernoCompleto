let dobro = function(a){
    return a * 2
}

dobro = (a) => {
    return a * 2
}

dobro = (a) => a * 2 // retorno implicito
console.log(dobro(5))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro mas não é utilizado pois o JS permite
console.log(ola())