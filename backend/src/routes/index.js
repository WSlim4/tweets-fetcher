const express = require("express");
const routes = express.Router();
const TweetController = require("../controller/TweetController");

routes.get("/tweets/:hashtag/:next_token", async (req, res) => {
    try {

        const { hashtag, next_token } = req.params;

        const tweets = await TweetController.fetchTweets(hashtag, next_token);

        return res.status(200).json(tweets);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
});

routes.get("/tweets", async (req, res) => {
    try {

        const tweets = await TweetController.index();

        return res.status(200).json(tweets);

    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
});

routes.post("/tweets", async (req, res) => {
    try {

        const tweet = await TweetController.create(req.body);

        return res.status(200).json(tweet);

    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
});

module.exports = routes;