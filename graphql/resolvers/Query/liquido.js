const LiquidoModel = require('../../../models/liquidoModel')

module.exports = {
    consultarLiquidos(obj, args, ctx) {
        if(ctx.admin) {
          return LiquidoModel.find()
            .populate('marca_id')
            // .populate('tags_id')
            
        } 
    }
}