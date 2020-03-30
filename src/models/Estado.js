const { Schema, model } = require('mongoose');
const mongoose= require('mongoose');

const EstadoSchema = Schema({
    nome: {
        type: String,
        require: true,
    },
    abreviacao: {
        type: String,
        require: true,
    },
    cidades : [
        {type: mongoose.Schema.Types.ObjectId,ref:'Cidade'}
    ]
}, {
    timestamps: true //createdAt, updatedAt
});


module.exports = model('Estado', EstadoSchema);