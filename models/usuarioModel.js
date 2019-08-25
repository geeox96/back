const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuidv4 = require('uuid/v4')
const bcrypt = require('bcrypt')

const UsuarioModel = new Schema({
    _id: {
        type: String,
        default: uuidv4,
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    tipo_conta: {
        type: Number,
        default: 110
    },
    fabricante_id: {
        type: String,
        ref: 'fabricante'
    },
    data_nascimento: {
        type: Date,
    },
    // fornecedor_id: {
    //     type: String,
    //     refs: 'fabricante'
    // },
    // youtuber_id: {
    //     type: String,
    //     refs: 'fabricante'
    // },
    // reviewer_id: {
    //     type: String,
    //     refs: 'fabricante'
    // },
    ativo: {
        type: Boolean,
        default: true
    }
}, { timestamps: true, versionKey: false })

UsuarioModel.pre('save', async function(next) {
    if (!this.isModified('senha')) return next()

    this.senha = await bcrypt.hash(this.senha, 10)
    return next()
})


module.exports = mongoose.model('usuario', UsuarioModel)