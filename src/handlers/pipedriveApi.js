const axios = require("axios");

const api = axios.create({
    baseURL: 'https://wesleyteste.pipedrive.com/api/v1',
    timeout: 3000
});

module.exports = api;