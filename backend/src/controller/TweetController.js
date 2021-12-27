const TweetsService = require("../services/TweetService");

class TweetsController {
    async fetchTweets(hashtag, next_token) {
        try {
            const response = await TweetsService.searchTweetByHashtag(hashtag, next_token);

            return response;
        } catch (error) {
            throw error;
        }
    }

    async create(tweet) {
        try {
            const response = await TweetsService.save(tweet);

            return response;
        } catch (error) {
            throw error;
        }
    }

    async index() {
        try {
            const response = await TweetsService.findAll();

            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new TweetsController;