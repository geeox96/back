
const FabricanteModel = require('../../../models/fabricanteModel')

module.exports = {
    async novoFabricante(_, { input }) {
        const fabricante = FabricanteModel.create({
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
}
