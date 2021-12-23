const formatResponse = ({ data: tweets, includes: { users }, meta }) => {
    // Verifica o user responsável pelo tweet e adiciona dentro do objeto de tweet
    // retorno: { array, ...objeto }

    tweets.forEach(tweet => {
        let user = users.filter(user => user.id == tweet.author_id)[0];
        tweet.user = user
    });

    return { tweets, ...meta };
}

module.exports = formatResponse;