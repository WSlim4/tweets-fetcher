const express = require("express");

const PORT = 3333;

class App {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();

        this.express.listen(PORT, () =>
            console.log(`Api rodando na porta ${PORT}`)
        );
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require("./routes"));
    }
}
module.exports = new App;