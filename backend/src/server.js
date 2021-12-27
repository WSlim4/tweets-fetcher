const express = require("express");
const db_connection = require("./database/config");

const PORT = 3333;

class App {
    constructor() {
        this.express = express();

        this.database();
        this.cors();
        this.middlewares();
        this.routes();

        this.express.listen(PORT, () =>
            console.log(`Api rodando na porta ${PORT}`)
        );
    }

    database() {
        db_connection();
    }

    cors() {
        this.express.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        });
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require("./routes"));
    }
}
module.exports = new App;