const TweetsService = require("../services/tweets")

class TweetsController {
    async fetchTweets(hashtag, next_token) {
        try {
            const response = await TweetsService.searchTweetByHashtag(hashtag, next_token);

            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new TweetsController;