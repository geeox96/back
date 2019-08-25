const FabricanteModel = require('../../../models/fabricanteModel')

module.exports = {
    consultarFabricantes(obj, args, ctx) {
            if (ctx.admin) {
                return FabricanteModel.find()
                  .populate('marca_id')
        }
    },
    
    consultarFabricantesAtivos(obj, args, ctx) {
        if(ctx.deslogado) {
            return FabricanteModel.find({ ativo: true })
        }
    }
}