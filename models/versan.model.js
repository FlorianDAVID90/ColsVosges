class Versan {
    constructor(id,km,pourc,ville) {
        this.id = id;
        this.nb_km = km;
        this.pourcentage = pourc;
        this.id_ville = ville;
    }

    //GETTERS
    get idVersan() { return this.id; }
    get kmVersan() { return this.nb_km; }
    get pourcentageVersan() { return this.pourcentage; }
    get idVille() { return this.id_ville; }

    //SETTERS
    set idVersan(id) { this.id = id; }
    set kmVersan(km) { this.nb_km = km; }
    set pourcentageVersan(pour) { this.pourcentage = pour; }
    set idVille(idV) { this.id_ville = idV; }

    static fromJSON(json) {
        const data = JSON.parse(JSON.stringify(json));
        if (typeof data !== 'object'
            || !data.hasOwnProperty("id")
            || (typeof data.id !== 'string' && typeof data.id !== 'number')
            || !data.hasOwnProperty("nb_km")
            || (typeof data.nb_km !== 'string' && typeof data.nb_km !== 'number')
            || !data.hasOwnProperty("pourcentage")
            || (typeof data.pourcentage !== 'string' && typeof data.pourcentage !== 'number')
            || !data.hasOwnProperty("id_ville")
            || (typeof data.id_ville !== 'string' && typeof data.id_ville !== 'number')){
            throw new Error(`Not a Versan : ${json}`);
        }

        return new Versan(data.id, data.nb_km, data.pourcentage, data.id_ville);
    }
}