const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagModel = new Schema(
  {
    _id: {
      type: String
    },
    nome: {
      type: String,
      required: true
    },
    descricao: {
      type: String
    }
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("tag", tagModel);
