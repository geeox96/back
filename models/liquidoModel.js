const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LiquidoModel = new Schema(
  {
    _id: {
      type: String
    },
    nome: {
      type: String,
      required: true
    },
    img: {
      type: String,
      default: ""
    },
    descricao: {
      type: String,
      required: true
    },
    info: {
      type: String
    },
    tag_id: {
      type: String,
      ref: "tag"
    },
    fabricante_id: {
      type: String,
      ref: "fabricante"
    },
    pg: {
      type: Number
    },
    vg: {
      type: Number
    },
    valor: {
      type: Number
    },
    link: {
      type: String
    },
    nota: {
      type: Number,
      default: 0
    },
    ativo: {
      type: Boolean,
      default: true
    },
    visitas: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("liquido", LiquidoModel);
