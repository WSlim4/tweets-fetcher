const needle = require("needle");
const formatResponse = require("../helpers/format_response");

const { TOKEN } = require("../common/environment");

class TweetsService {

    async searchTweetByHashtag(hashtag) {
        try {
            const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";
            const params = {
                'query': '#' + hashtag,
                'expansions': 'author_id',
                'tweet.fields': 'created_at,source',
                'user.fields': 'name,profile_image_url'
            }

            const res = await needle('get', endpointUrl, params, {
                headers: {
                    "User-Agent": "v2RecentSearchJS",
                    "authorization": `Bearer ${TOKEN}`
                }
            });

            if (res.body) {

                return formatResponse(res.body);
            } else {
                throw new Error('Erro ao processar a requisição!');
            }

        } catch (error) {
            throw error;
        }

    }

}

module.exports = new TweetsService;