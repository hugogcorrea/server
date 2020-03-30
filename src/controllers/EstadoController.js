const Estado = require('../models/Estado');
module.exports = {
    create: async (req, res) => {
        const { nome, abreviacao } = req.body;
        const estado = await Estado.create({
            nome,
            abreviacao
        })
        return res.send(estado)
    },
    update: async (req, res) => {
        const { _id } = req.params;
        const { nome, abreviacao } = req.body;
        const estado = await Estado.findByIdAndUpdate(_id, { nome, abreviacao }, function (err, estado) {
            if (err) throw err;
        });
        return res.send(estado)
    },
    delete: async (req, res) => {
        const { _id } = req.params;
        await Estado.findByIdAndDelete(_id, function (err, estado) {
            if (err) throw err;
            return res.send(estado)
        });
    },
    find: async (req, res) => {
        const estados = await Estado.find();
        return res.send(estados);
    },
    cidadesByEstado: async (req, res) => {
        const { _id } = req.params;
        const estado = await Estado.findById(_id, function (err, estado) {
            if (err) throw err;
        }).populate('cidades');
        res.send(estado);
    },
};