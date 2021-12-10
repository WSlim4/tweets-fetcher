const express = require("express");
const routes = express.Router();
const OportunidadeController = require("../controller/OportunidadeController");

routes.get("/consolidate", async (req, res) => {
    try {

        const response = await OportunidadeController.fetchPipedrive();

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }

});

module.exports = routes;