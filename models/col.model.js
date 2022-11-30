class Col {
    constructor(id, name, versans) {
        this.id = id;
        this.nom = name;
        this.versans = versans;
    }

    //GETTERS
    get idCol() { return this.id; }
    get nomCol() { return this.nom; }
    get allVersansCol() { return this.versans; }
    getVersanColNum = (id) => { return this.versans[id]; }

    //SETTERS
    set idCol(id) { this.id = id; }
    set nomCol(name) { this.nom = name; }
    set allVersansCol(ve) { this.versans = ve; }
    setVersanColNum = (id, ve) => { this.versans[id] = ve; }

    static fromJSON(json){
        const data = JSON.parse(JSON.stringify(json));
        if (typeof data !== 'object'
            || !data.hasOwnProperty("id")
            || (typeof data.id !== 'string' && typeof data.id !== 'number')
            || !data.hasOwnProperty("nom")
            || typeof data.nom !== 'string'
            || !data.hasOwnProperty("versans")
            || typeof data.versans !== 'object'){
            throw new Error(`Not a Col : ${json}`);
        }

        return new Col(data.id, data.nom, data.versans);
    }
}

module.exports = { Col: Col }