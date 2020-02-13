const AWS = require("aws-sdk");
const moment = require("moment");
const FabricanteModel = require("../../../models/fabricanteModel");

module.exports = {
  async novoFabricante(_, { input }, ctx) {
    if (ctx.admin) {
      const fabricante = await FabricanteModel.create({
        nome: input.nome,
        descricao: input.descricao,
        email_contato: input.email_contato,
        telefone: input.telefone,
        whatsapp: input.whatsapp,
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
        email_contato: input.email_contato,
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
    if (ctx.admin) {
      AWS.config.update({
        accessKeyId: "AKIAJZ3F7ME6SAPZKANA",
        secretAccessKey: "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",
        region: "us-east-1"
      });

      const bucketName = "vaporcenter/marcas";
      const key = input.nome + "-" + moment().format("h:mm:ss") + "-logo";

      const buf = new Buffer(
        input.img.replace(/^data:image\/\w+;base64,/, ""),
        "base64"
      );

      var objectParams = {
        Bucket: bucketName,
        Key: key,
        Body: buf,
        ContentEncoding: "base64",
        ContentType: "image/jpeg"
      };

      const uploadPromise = new AWS.S3({ apiVersion: "2006-03-01" })
        .putObject(objectParams)
        .promise();
      uploadPromise.catch(function(err) {
        console.error(err, err.stack);
      });

      return await FabricanteModel.findByIdAndUpdate(input._id, {
        nome: input.nome,
        descricao: input.descricao,
        img: `https://vaporcenter.s3.amazonaws.com/marcas/${key}`,
        cidade: input.cidade,
        telefone: input.telefone,
        whatsapp: input.whatsapp,
        email_contato: input.email_contato,
        liquido_id: input.liquido_id,
        estado: input.estado,
        url_site: input.url_site,
        url_insta: input.url_insta,
        url_face: input.url_face,
        ativo: input.ativo,
        premium: input.premium
      });
    }
  }
};
