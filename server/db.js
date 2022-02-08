const Pool = require("pg").Pool;

const pool = new Pool({
    user: "Sohta063019",
    host: process.env.DATABASE_URL,
    port: 5432,
    database: "budgettrack"
})
module.exports = pool;


// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DATABASE_URL,
//     port: process.env.DB_PORT,
//     database: process.env.DB_TABLE,
// })


// environment: development:

// environment: production
/*
{

}
*/