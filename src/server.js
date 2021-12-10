const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");

const PORT = 3333;

class App {
    constructor() {
        this.express = express();

        this.database();
        this.middlewares();
        this.routes();

        this.express.listen(PORT, () =>
            console.log(`Api rodando na porta ${PORT}`)
        );
    }

    database() {
        mongoose.connect(db.uri, { useNewUrlParser: true });
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require("./routes"));
    }
}
module.exports = new App;