const LiquidoModel = require('../../../models/liquidoModel')

module.exports = {
    async novoLiquido(_, { input }, ctx) {
        if(ctx.fabricante) {
        const liquido = await LiquidoModel.create({
            nome: input.nome,
            img: input.img,
            descricao: input.descricao,
            info: input.info,
            tag_id: input.tag_id,
            marca_id: input.fabricante_id,
            pg: input.pg,
            vg: input.vg,
            valor: input.descricao
        })
        return liquido
    }
    }
}

