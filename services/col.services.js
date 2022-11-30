const colModel = require('../models/col.model')
const colsJSON = require('../json/cols.json')

class AllCols extends colModel.Col {
    async list(callback) {
        const cols = await this.readAllCols();
        if(cols.length === 0) {
            return callback([]);
        }

        let result = [];
        cols.forEach((col) => {
            result.push(JSON.parse(col.JSON));
        });
        return callback(null,result);
    }

    async readAllCols() {
        try {
            const cols = [];
            colsJSON.forEach((col) => {
                cols.push(colModel.Col.fromJSON(col));
            })
            return cols;
        } catch(e) {
            console.log(e);
            return [];
        }
    }
}

function get_allCols() {
    let cols = [];

    colsJSON.forEach((col) => {
        let versans = [];
        col["versans"].forEach((v) => {
            versans.push(v);
        })
        cols.push({
            id: col["id"],
            nom: col["nom"],
            versans: versans
        });
    })
    return cols;
}

function getVersanCol(v, c, callback) {
    let versan;
    let col = colsJSON.filter((col) => col["id"] === c);
    if(col.length !== 1) {
        return callback("Error : Aucun ou plusieurs cols");
    } else {
        versan = col["versans"].filter((ve) => ve["id_versan"] === v)
        if(versan.length !== 1) {
            return callback("Error : Aucun ou plusieurs versans");
        } else {
            return callback(null, versan);
        }
    }
}

module.exports = {
    AllCols, get_allCols, getVersanCol
}