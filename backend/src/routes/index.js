const express = require("express");
const routes = express.Router();
const TweetController = require("../controller/TweetController");

routes.get("/tweets/:hashtag/:next_token", async (req, res) => {
    try {

        const { hashtag, next_token } = req.params;

        const response = await TweetController.fetchTweets(hashtag, next_token);

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }

});

module.exports = routes;