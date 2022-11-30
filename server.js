const express = require('express')
require('dotenv').config();
const app = express();
const departements = require('./services/departement.services').get_allDepartements();

const  colRouter = require('./routes/col.router')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`))

app.set('views', `${__dirname}/views/`);
app.set('view engine','pug');

app.use('/cols', colRouter)

app.get('/', (req, res) => {
    res.render('home.pug', {departements});
})

const port = process.env.PORT || 8888;

app.listen(port, () => {
    console.log(`Listen to http://localhost:${port}`)
})
