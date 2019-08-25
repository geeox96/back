const fabricante = require('./fabricante')
const usuario = require('./usuario')
const liquido = require('./liquido')

module.exports = {
...fabricante,
...usuario,
...liquido
}