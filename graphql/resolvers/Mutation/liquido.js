const LiquidoModel = require('../../../models/liquidoModel')
const FabricanteModel = require('../../../models/fabricanteModel')
const uuidv4 = require('uuid/v4')

module.exports = {
    async novoLiquido(_, { input }, ctx) {
        if(ctx.fabricante) {
            const id = uuidv4()
            await FabricanteModel.findByIdAndUpdate(input.fabricante_id, {
                 $push: { liquido_id: id } 
            })

            return await LiquidoModel.create({
                _id: id,
                nome: input.nome,
                img: input.img,
                descricao: input.descricao,
                info: input.info,
                // tag_id: input.tag_id,
                fabricante_id: input.fabricante_id,
                pg: input.pg,
                vg: input.vg,
                valor: input.valor
            })
    }
    },

    async deletarLiquido(_, { input }, ctx) {
        if (ctx.fabricante) {
            await FabricanteModel.findByIdAndUpdate( input.fabricante_id, {
                $pull: { liquido_id: input._id } 
           })
           return await LiquidoModel.findByIdAndDelete( input._id )
             .then(sucesso => (!!sucesso))
             .catch(() => {return false})
        }
    }
}

