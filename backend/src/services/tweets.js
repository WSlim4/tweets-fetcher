const needle = require("needle");
const formatResponse = require("../helpers/format_response");

const { API_TOKEN } = require("../common/environment");

class TweetsService {

    async searchTweetByHashtag(hashtag, next_token) {
        try {
            const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";
            const params = {
                'query': '#' + hashtag,
                'expansions': 'author_id',
                'tweet.fields': 'created_at,source',
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

}

module.exports = new TweetsService;