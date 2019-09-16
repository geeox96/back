const FabricanteModel = require("../../../models/fabricanteModel");

module.exports = {
  async novoFabricante(_, { input }, ctx) {
    if (ctx.admin) {
      const fabricante = await FabricanteModel.create({
        nome: input.nome,
        descricao: input.descricao,
        cidade: input.cidade,
        estado: input.estado,
        url_site: input.url_site,
        url_insta: input.url_insta,
        url_face: input.url_face
      });
      return fabricante;
    }
  },

  async editarFabricante(_, { input }, ctx) {
    if (ctx.fabricante) {
      return await FabricanteModel.findByIdAndUpdate(input._id, {
        nome: input.nome,
        descricao: input.descricao,
        cidade: input.cidade,
        telefone: input.telefone,
        whatsapp: input.whatsapp,
        estado: input.estado,
        url_site: input.url_site,
        url_insta: input.url_insta,
        url_face: input.url_face
      });
    }
  },

  async editarFabricanteAdmin(_, { input }, ctx) {
    console.log("chegou aqui");
    if (ctx.admin) {
      console.log(input);
      return await FabricanteModel.findByIdAndUpdate(input._id, {
        nome: input.nome,
        descricao: input.descricao,
        cidade: input.cidade,
        telefone: input.telefone,
        whatsapp: input.whatsapp,
        liquido_id: input.liquido_id,
        estado: input.estado,
        url_site: input.url_site,
        url_insta: input.url_insta,
        url_face: input.url_face,
        ativo: input.ativo
      });
    }
  }
};
