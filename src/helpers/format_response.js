const formatResponse = ({ data: tweets, includes: { users } }) => {
    tweets.forEach(tweet => {
        let user = users.filter(user => user.id == tweet.author_id);
        tweet.user = user
    });

    return tweets;
}

module.exports = formatResponse;