import Api from "../Api";

class TweetsService {

    async fetchTweets(hashtag, next_token) {
        return await Api.get(`/tweets/${hashtag}/${next_token}`);
    }

    async saveTweet(tweet) {
        return await Api.post('/tweets', tweet);
    }
}

export default new TweetsService;