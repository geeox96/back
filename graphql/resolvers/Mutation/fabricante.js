
const FabricanteModel = require('../../../models/fabricanteModel')

module.exports = {
    async novoFabricante(_, { input }, ctx) {
        if(ctx.admin) {
        const fabricante = await FabricanteModel.create({
            nome: input.nome,
            descricao: input.descricao,
            cidade: input.cidade,
            estado: input.estado,
            url_site: input.url_site,
            url_insta: input.url_insta,
            url_face: input.url_face
        })
        return fabricante
    }
    },

    async editarFabricante(_, { input }, ctx) {
        if(ctx.fabricante) {
            return await FabricanteModel.findByIdAndUpdate(input._id, {
                nome: input.nome,
                descricao: input.descricao,
                cidade: input.cidade,
                estado: input.estado,
                url_site: input.url_site,
                url_insta: input.url_insta,
                url_face: input.url_face,
            })
        }
    },

    async editarFabricanteAdmin(_, { input }, ctx) {
        if(ctx.admin) {
            return await FabricanteModel.findByIdAndUpdate( input._id, {
                nome: input.nome,
                descricao: input.descricao,
                cidade: input.cidade,
                liquidos_id: input.liquidos_id,
                estado: input.estado,
                url_site: input.url_site,
                url_insta: input.url_insta,
                url_face: input.url_face,
                ativo: input.ativo,
            })
        }
    }
}
