const Pool = require("pg").Pool;

const pool = new Pool({
    user: "Sohta063019",
    host: "localhost",
    port: 5432,
    database: "budgettrack"
})

module.exports = pool;