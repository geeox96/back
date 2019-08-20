const FabricanteModel = require('../../../models/fabricanteModel')

module.exports = {
    consultarFabricantes() {
        const fabricantes = FabricanteModel.find()
        return fabricantes
    }
}