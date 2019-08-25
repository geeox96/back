const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuidv4 = require('uuid/v4')
// const bcrypt = require('bcrypt')

const FabricanteModel = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String
    },
    cidade: {
        type: String
    },
    liquidos_id: {
        type: Array
    },
    estado: {
        type: String,
        required: true,
    },
    url_site: {
        type: String,
    },
    url_insta: {
        type: String,
    },
    url_face: {
        type: String,
    },
    ativo: {
        type: Boolean,
        default: false
    }
}, { timestamps: true, versionKey: false })
    
// FabricanteSchema.pre('save', async function(next) {
//     if (!this.isModified('senha')) return next()

//     this.senha = await bcrypt.hash(this.senha, 10)
//     return next()
// })


module.exports = mongoose.model('fabricante', FabricanteModel)