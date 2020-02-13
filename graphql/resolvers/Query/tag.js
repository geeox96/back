const TagModel = require('../../../models/tagModel')

module.exports = {
  consultarTags(_, ctx) {
    if (ctx.admin) {
      return TagModel.find()
    }
  },
}