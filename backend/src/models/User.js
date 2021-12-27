const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    userId: Number,
    name: String,
    username: String,
    profileImage: String,
    dataCriacao: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;