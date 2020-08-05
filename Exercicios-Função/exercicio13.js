function diaUtil(dia){
    switch(dia){
        case 1:
            return 'Fim de semana'
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia útil'
            break
        case 7:
            return 'Fim de semana'
            break
        default:
            return 'Dia inválido'
    }
}

console.log(diaUtil(4))