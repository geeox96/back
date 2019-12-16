const TagModel = require('../../../models/tagModel')

module.exports = {
  async criarTag(_, { input }, ctx) {
    if (ctx.admin) {
      TagModel.create(input).then(() => (true))
    }
  },
}

