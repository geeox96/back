
const UsuarioModel = require('../../../models/usuarioModel')

module.exports = {
    async novoUsuario(_, { input }) {

        const usuario = await UsuarioModel.create({
            email: input.email,
            senha: input.senha,
            nome: input.nome,
            data_nascimento: input.data_nascimento,
        })

        console.log('Novo usuario registrado', input.nome)
        console.log('Email: ', input.email)

        return usuario
    }
}
