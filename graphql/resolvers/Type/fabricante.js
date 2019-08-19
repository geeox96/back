const FabricanteModel = require('../../../models/fabricanteModel')

module.exports = {
    fabricantes(input) {
        return FabricanteModel.findById(input._id)
    }
}