const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const moduloC = require('../moduloC')
console.log(moduloC.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)