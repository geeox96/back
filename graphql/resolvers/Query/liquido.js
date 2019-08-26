const LiquidoModel = require('../../../models/liquidoModel')

module.exports = {
    consultarLiquidos(obj, args, ctx) {
        if(ctx.admin) {
        return LiquidoModel.find()
            .populate('fabricante_id')
            // .populate('tags_id')
        }
    },

    consultarLiquidosAtivos(obj, args, ctx) {
        if(ctx.deslogado) {
        return LiquidoModel.find({ativo: true})
            .populate('fabricante_id')
            // .populate('tags_id')
        }
    }
}