const Serie = require("../models/series");
const SerieList = require("../models/serieList");

const lista = nem SerieList();

const serie1 = new Serie("Gossip Girl", "Josh Schwartz", "drama");
lista.addSerie(serie1);

lista.addSerie(new Serie("Brooklyn Nine-Nine", "Andy Samberg ", "ação"));

const router = {
    addSerie: (req, res) => {
        try {
            const { nome, temporada, episodio, diretor } = req.body;
            if (!nome || !temporada || !episodio || !diretor) {
                throw new Error("Preencha todos os campos!");
            }
            const serie = new Serie(nome, temporada, episodio, diretor);
            lista.addSerie(serie);
            res.status(200).json({ message: "Criado com sucesso", serie });
        } catch (error) {
            res.status(200).json({
                message: "Erro ao criar série", error: error.message,
            });

        }
    },
    getAllSerie: (req, res) => {
        try {
            const series = lista.getAllSerie();
            res.status(200).json(series);
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar séries",
                error: error.message,
            });
        }
    },

    getSerieById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getSerieById(id));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao atualizar",
                error: error.message
            });
        }
    },

    deleteSerie: (req, res) => {
        try {
            const serie = req.params.id;
            lista.deleteSerie(serie);
            res.status(200).json({
                message: "Série deletada com sucesso",
                serie,
            });
        } catch (error) {
            res.status(404).json({
                message: "Erro ao deletar série",
                error: error.message,
        });
    }
}
 


};

module.exports = router;