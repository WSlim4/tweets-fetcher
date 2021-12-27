const mongoose = require('mongoose');

async function connection() {
    try {
        await mongoose.connect('mongodb+srv://mongoUser:mongo123@cluster0.0sx4k.mongodb.net/Kittens?retryWrites=true&w=majority');
        console.log('Conectado com sucesso!');
    } catch (error) {
        console.log('Erro ao conectar: ' + error);
    }

}

module.exports = connection;