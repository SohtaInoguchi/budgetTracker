const Pool = require("pg").Pool;
require('dotenv').config();

// const pool = new Pool({
//     user: "Sohta063019",
//     host: PG_HOST,
//     port: 5432,
//     max: 20,
//     database: "budgettrack"
// })


const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const proConfig = process.env.DATABASE_URL; //heroku addons

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? proConfig : devConfig,
});


module.exports = pool;


// PG_USER=Sohta063019
// PG_PASSWORD=
// PG_HOST=localhost
// PG_PORT=5432
// PG_DATABASE=budgettrack
// NODE_ENV=development

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