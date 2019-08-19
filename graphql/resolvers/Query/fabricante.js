const FabricanteModel = require('../../../models/fabricanteModel')

module.exports = {
    fabricante() {
        return FabricanteModel.find()
    }
}