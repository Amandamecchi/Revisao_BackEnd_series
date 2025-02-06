const { v4: uuid4 } = require("uuid");

class Serie {
    constructor(nome, temporada, episodio, diretor) {
        this.id = uuid4();
        this.nome = nome;
        this.temporada = temporada;
        this.epidodio = episodio;
        this.diretor = diretor;
    }

    
}

module.exports = Serie;