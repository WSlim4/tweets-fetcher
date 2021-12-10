require("dotenv/config");
module.exports = {
    uri: process.env.DB_CONNECTION_STRING,
    pipedrive_api_token: process.env.PIPEDRIVE_API_TOKEN
}