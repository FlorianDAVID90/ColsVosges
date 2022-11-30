const departementModel = require('../models/departement.model')
const departementsJSON = require('../json/departements.json')

class AllDepartements extends departementModel.Departement {
    async list(callback) {
        const departs = await this.readAllDepartements();
        if(departs.length === 0) {
            return callback([]);
        }

        let result = [];
        departs.forEach((d) => {
            result.push(JSON.parse(d.JSON));
        });
        return callback(null,result);
    }

    async readAllDepartements() {
        try {
            const departs = [];
            departementsJSON.forEach((d) => {
                departs.push(departementModel.Departement.fromJSON(d));
            })
            return departs;
        } catch(e) {
            console.log(e);
            return [];
        }
    }
}

function get_allDepartements() {
    let departements = [];

    departementsJSON.forEach((dep) => {
        departements.push({
            id: dep["id"],
            nom: dep["nom"]
        });
    })
    return departements;
}

module.exports = {
    AllDepartements: AllDepartements,
    get_allDepartements: get_allDepartements
}