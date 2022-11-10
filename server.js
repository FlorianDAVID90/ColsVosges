const express = require('express')
require('dotenv').config();
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`))

app.set('views', `${__dirname}/views/`)
app.set('view engine','pug');

app.get('/', (req, res) => {
    res.send("APP DEMO OK !")
})

const port = process.env.PORT || 2023;
const host = process.env.HOST;

app.listen(port, host, () => {
    console.log(`Listen to http://${host}:${port}`)
})
