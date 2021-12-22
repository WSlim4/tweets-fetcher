const TweetsService = require("../services/tweets")

class TweetsController {
    async fetchTweets(hashtag) {
        try {
            const response = await TweetsService.searchTweetByHashtag(hashtag);

            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new TweetsController;