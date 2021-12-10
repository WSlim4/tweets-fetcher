const pipedriveApi = require("../handlers/pipedriveApi");
const axios = require("axios");
const env = require("../database/config");

class OportunidadeController {
    async fetchPipedrive() {
        try {

            const response = await pipedriveApi.get(`/deals/search?term=teste&status=won&api_token=${env.pipedrive_api_token}`);

            //return response.data;
            return response.data.data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new OportunidadeController;