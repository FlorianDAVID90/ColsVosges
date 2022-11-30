const sqlite3 = require('sqlite3').verbose()
const pool = new sqlite3.Database('cols_vosges.db')
module.exports = pool;