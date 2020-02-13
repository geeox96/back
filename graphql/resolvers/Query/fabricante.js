const FabricanteModel = require('../../../models/fabricanteModel')

module.exports = {
  consultarFabricantes(obj, args, ctx) {
    if (ctx.admin) {
      return FabricanteModel.find()
        .populate('liquido_id')
    }
  },

  consultarFabricantesAtivos(obj, args, ctx) {
    if (ctx.deslogado) {
      return FabricanteModel.find({ ativo: true })
        .populate('liquido_id')
    }
  }
}