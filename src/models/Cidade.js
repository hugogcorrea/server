const { Schema, model } = require('mongoose');
const mongoose= require('mongoose');

const CidadeSchema = Schema({
    nome: {
        type: String,
        require: true,
    },
    estadoId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Estado'
    }
}, {
    timestamps: true //createdAt, updatedAt
});


module.exports = model('Cidade', CidadeSchema);