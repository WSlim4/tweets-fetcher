const express = require("express");
const routes = express.Router();
const TweetController = require("../controller/TweetController");

routes.get("/tweets/:hashtag", async (req, res) => {
    try {

        let hashtag = req.params.hashtag;

        const response = await TweetController.fetchTweets(hashtag);

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }

});

module.exports = routes;