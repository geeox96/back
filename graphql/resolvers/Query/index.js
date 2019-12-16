const fabricante = require("./fabricante");
const usuario = require("./usuario");
const liquido = require("./liquido");
const tag = require("./tag");

module.exports = {
  ...fabricante,
  ...usuario,
  ...liquido,
  ...tag
};
