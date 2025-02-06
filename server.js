const express = require("express");
const cors = require("cors");
const serieRoutes = require("./src/routes/seriesRoutes");

const app = express();
const PORT = 2080;

app.use(cors());
app.use(express.json());

app.use("/api", serieRoutes);

app.get("/", (req, res) => {
    res.send("Eu amo backEnd");

});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});