const FabricanteModel = require('../../../models/fabricanteModel')

module.exports = {
    async novoFabricante(_, { input }) {
        try {
            const fabricante = await FabricanteModel.create(input)
        } catch(e) {
            throw new Error(e)
        }
    }
}
