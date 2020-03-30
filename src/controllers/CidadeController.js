const Estado = require('../models/Estado');
const Cidade = require('../models/Cidade');

module.exports = {
    create: async (req, res) => {
        const { nome, estadoId } = req.body;
        const cidade = await Cidade.create({
            nome,
            estadoId: estadoId
        });
        await cidade.save();
        const estadoById = await Estado.findById(estadoId);
        estadoById.cidades.push(cidade);
        await estadoById.save();
        return res.send(estadoById);
    },
    update: async (req, res) => {
        const { _id } = req.params;
        const { nome } = req.body;
        await Cidade.findByIdAndUpdate(_id, { nome }, function (err, cidade) {
            if (err) throw err;
            return res.send(cidade)
        });
    },
    delete: async (req, res) => {
        const { _id } = req.params;
        await Cidade.findByIdAndDelete(_id, function (err, cidade) {
            if (err) throw err;
            return res.send(cidade)
        });
    },
    
    estadoByCidade: async (req, res) => {
        const { _id } = req.params;
        const estadoByCidade = await Cidade.findById(_id, function (err, cidade) {
            if (err) throw err;
        }).populate('estadoId');
        res.send(estadoByCidade);
    },

}