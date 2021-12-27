const mongoose = require('mongoose');
const { Schema } = mongoose;

const TweetSchema = new Schema({
    text: String,
    authorId: Number,
    dataCriacao: { type: Date, default: Date.now }
});

const Tweet = mongoose.model('Tweet', TweetSchema);

module.exports = Tweet;