const nome = 'Allan'
const concatenacao = "Olá" + nome + "!"
const template = `
    Olá
    ${nome}`

console.log(concatenacao, template)

// expressões

console.log(`1 + 1 = ${1+1}`)

// funções

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)