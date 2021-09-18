const fs = require('fs');
const {Pool} = require('pg');

var connectionString = "postgresql://htnapp:hackthenorth@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&sslrootcert=/home/soli/htn2021/api/db/root.crt&options=--cluster%3Dsandy-mule-3560";

const parse = require("pg-connection-string").parse;
var config = parse(connectionString);
  config.port = 26257;
  config.database = 'defaultdb';
  const pool = new Pool(config);

/* const pool = new Pool ( {
    user: 'htnapp',
    password: 'hackthenorth',
    host: 'free-tier.gcp-us-central1.cockroachlabs.cloud',
    database: 'sandy-mule-3560.defaultdb',
    port: 26257,
    ssl: {
        ca: './root.crt'
    }
}) */

const createTable = (request,response) => {
    pool.query('CREATE TABLE IF NOT EXISTS users (id INT PRIMARY KEY, name VARCHAR)', (err, results) => {
        if (err) {
            throw err;
        }
        if (response) {
            response.status(200).json(results.rows);
        }
        
    });
}

const getUsers = (request,response) => {
    pool.query('SELECT * FROM users', (err, results) => {
        if (err) {
            throw err
        }
        response.status(200).json(results.rows);
    });
}

module.exports = {
    createTable,
    getUsers
}