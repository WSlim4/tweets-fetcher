const mongoose = require('mongoose');
const { Schema } = mongoose;

const TweetSchema = new Schema({
    text: String,
    dataCriacao: { type: Date, default: Date.now },
    author: {
        id: Number,
        name: String,
        username: String,
        profileImage: String
    }
});

const Tweet = mongoose.model('Tweet', TweetSchema);

module.exports = Tweet;