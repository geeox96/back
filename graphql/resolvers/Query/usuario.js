const UsuarioModel = require('../../../models/usuarioModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports = {
  consultarUsuarios(obj, args, ctx) {
    if (ctx.admin) {
      return UsuarioModel.find()
        .populate('fabricante_id')
    }
  },

  consultarUsuarioID(_, { id }, obj, args, ctx) {
    if (ctx.admin) {
      return UsuarioModel.findById(id)
        .populate('fabricante_id')
    }
  },

  consultarUsuariosAtivos() {
    return UsuarioModel.find({ ativo: true })
      .populate('fabricante_id')
  },


  async logar(_, { input }) {
    //return 1 = Usuario não encontrado
    //return 2 = usuario desativado
    //return 3 = senha incorreta
    const login = await UsuarioModel.findOne({ email: input.email }).then(login => login)

    if (!login) {
      return { erro: 1 }
    }
    else if (!login.ativo) {
      return { erro: 2 }
    } else {
      const senhaCorreta = await bcrypt.compare(input.senha, login.senha)
      if (senhaCorreta) {
        const dados = {
          _id: login._id,
          email: login.email,
          ativo: login.ativo,
          tipo_conta: login.tipo_conta,
        }
        const resp = {
          token: jwt.sign(dados, process.env.APP_SECRET),
          id: login._id,
          ativo: login.ativo,
          tipo_conta: login.tipo_conta
        }
        return resp

      } else {
        return { erro: 3 }
      }
    }
  }
}