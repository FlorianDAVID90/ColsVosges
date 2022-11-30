const colService = require('../services/col.services');
const queries = require('../services/queries.services')
const pool = require('../db')
const departements = require('../services/departement.services').get_allDepartements();

function detectError(req, res, error, results, render, data) {
    if (error) {
        throw error;
        //return res.status(400).send(`<h1 style="color: green">ERROR 400: ${{success: 0, data: error}}</h1>`);
    } else if(render === null) {
        return res.status(200).send({success: 1, data: results});
    }
    return res.render(render, {departements}, data)
}

exports.list = (req, res) => {
    let service = new colService.AllCols();
    service.list((error, results) => detectError(req,res,error,results)).then();
}

exports.showVersan = (req, res) => {
    colService.getVersanCol(req.params["id_versan"], req.params["id_col"], (error, results) => {
        if(error) throw error
        console.log(req.params["id_versan"] + " " +req.params["id_col"])
        return detectError(req, res, error, results)
    })
}

exports.getColsDept = (req, res) => {
    pool.all(queries.getColsFromDept, req.params.id, (error, results) => {
        if(error) throw error
        console.log(results.length)
        return res.render('cols_dept.pug', {departements, cols: results, id_dept: req.params.id})
    });
}

exports.showOneVersan = (req, res) => {
    pool.each(queries.getVersan, req.params["idV"], (error, results) => {
        if(error) throw error
        console.log(results)
        return res.render('show_versan.pug', {departements, versan: results})
    })
}