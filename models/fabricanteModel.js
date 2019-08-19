const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuidv4 = require('uuid/v4')
// const bcrypt = require('bcrypt')

const FabricanteModel = new Schema({
    _id: {
        type: String,
        default: uuidv4,
        required: true
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
    sabores_id: {
        type: Array
    },
    estado: {
        type: String,
        required: true,
    },
    urlSite: {
        type: String,
    }
}, { timestamps: true, versionKey: false })

// FabricanteSchema.pre('save', async function(next) {
//     if (!this.isModified('senha')) return next()

//     this.senha = await bcrypt.hash(this.senha, 10)
//     return next()
// })


module.exports = mongoose.model('Usuario', FabricanteModel)