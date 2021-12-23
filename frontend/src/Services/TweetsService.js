import Api from "../Api";

class TweetsService {
    async fetchTweets(hashtag, next_token) {
        return await Api.get(`/tweets/${hashtag}/${next_token}`);
    }
}

export default new TweetsService;