const mongoose = require('mongoose');
const { Schema } = mongoose;

const OportunidadeSchema = new Schema(
    {
        dia: {
            type: Date,
            required: true
        },
        valorTotal: {
            type: Number,
            required: true
        }
    }, {
    timestamps: true
});

module.exports = mongoose.Model("Oportunidade", OportunidadeSchema);