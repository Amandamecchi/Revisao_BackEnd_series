const { deleteSerie } = require("../controller/seriesController");

class SerieList {
    constructor() {
        this.series = [];
    }
    addSerie(serie) {
        this.series.push(serie);
    }
    getAllSeries() {
        return this.series;
    }
    getSeriesById(id) {
        const serie = this.series.find((serie) => serie.id == id);
        if (!serie) {
            throw new Error("Série não encontrada");
        }
        return serie;
    }

    updateSerie(id, updateData) {
        const serie = this.getSeriesById(id);
        Object.assign(serie, updateData);
        return serie;
    }

    deleteSerie(id) {
        this.serie = this.serie.filter((serie) => serie.id != id);
    }

}

module.exports = SerieList;