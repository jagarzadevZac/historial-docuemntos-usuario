const {createPool} = require("mysql");

const db = createPool({
    port : 3306,
    host: "w3epjhex7h2ccjxx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:"jcq6xdyodmabac9g",
    password:"trsse17mzzy23r0x",
    database:"jnqx6pnmo9cryljr",
    connectionLimit:10,
});

module.exports = db;