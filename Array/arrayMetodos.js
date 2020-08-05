const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove da ultima posição do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona a ultima posição do array
console.log(pilotos)

pilotos.shift() // remove o promeiro indice do array
console.log(pilotos)

pilotos.unshift() // adiciona antes do primeiro indice do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//faz um novo array apartir do indice passado como param
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)