const needle = require("needle");
const formatResponse = require("../helpers/format_response");
const Tweet = require("../models/Tweet");

const { API_TOKEN } = require("../common/environment");

class TweetsService {

    async searchTweetByHashtag(hashtag, next_token) {
        try {
            const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";
            const params = {
                'query': '#' + hashtag,
                'expansions': 'author_id',
                'tweet.fields': 'created_at',
                'user.fields': 'name,profile_image_url'
            }

            if (next_token !== 'default') {
                params['next_token'] = next_token;
            }

            const res = await needle('get', endpointUrl, params, {
                headers: {
                    "User-Agent": "v2RecentSearchJS",
                    "authorization": `Bearer ${API_TOKEN}`
                }
            });

            if (res.body) {
                let response = [];

                if (res.body.data && res.body.includes) {
                    response = formatResponse(res.body);
                }

                return response;
            } else {
                throw new Error('Erro ao processar a requisição!');
            }

        } catch (error) {
            throw error;
        }

    }

    async save({ text, created_at, user }) {
        try {
            const tweet = new Tweet({
                text,
                dataCriacao: created_at,
                author: {
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    profileImage: user.profile_image_url
                }
            });

            await tweet.save();

            return tweet;
        } catch (error) {
            throw error;
        }
    }

    async findAll() {
        try {
            const tweets = await Tweet.find({});

            return tweets;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new TweetsService;