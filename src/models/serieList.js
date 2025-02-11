class SerieList {
    constructor() {
        this.serie = [];
    }
    addSerie(serie) {
        this.serie.push(serie);
    }
    getAllSeries() {
        return this.serie;
    }
    getSeriesById(id) {
        const serie = this.serie.find((serie) => serie.id == id);
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