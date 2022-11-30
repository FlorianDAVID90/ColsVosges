class Departement {
    constructor(id,name) {
        this.id = id;
        this.nom = name;
    }

    //GETTERS
    get idDepartement() { return this.id; }
    get nomDepartement() { return this.nom; }

    get JSON() {
        return JSON.stringify({
            id: this.id,
            nom: this.nom
        })
    }

    //SETTERS
    set idDepartement(id) { this.id = id; }
    set nomDepartement(name) { this.nom = name; }

    static fromJSON(json){
        const data = JSON.parse(JSON.stringify(json));
        if (typeof data !== 'object'
            || !data.hasOwnProperty("id")
            || (typeof data.id !== 'string' && typeof data.id !== 'number')
            || !data.hasOwnProperty("nom")
            || typeof data.nom !== 'string'){
            throw new Error(`Not a Departement : ${json}`);
        }

        return new Departement(data.id, data.nom);
    }
}

module.exports = { Departement: Departement }