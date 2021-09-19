const fs = require('fs');
const {Pool} = require('pg');

var connectionString = "postgresql://htnapp:hackthenorth@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&sslrootcert=//Users/labeebzaker/Desktop/HackTheNorth/htn2021/api/db/root.crt&options=--cluster%3Dsandy-mule-3560";

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

const createUserTable = (request,response) => {
    pool.query('CREATE TABLE IF NOT EXISTS candidates (email VARCHAR PRIMARY KEY, name VARCHAR, password VARCHAR, region VARCHAR, age INT)', (err, results) => {
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

const createCandidate = (request,response) => {
    var {email,name,password,region,age} = request.body 
    password = hash(password)
    pool.query('INSERT INTO candidates (email, name, password, region, age) VALUES (email,name,password,region,age) ', (err, results) => {
        if (err) {
            throw err
        }
        if (response) {
            response.status(200).json(results.rows);
        }});
}
const findUser = (request) => {
    var {User} = request.body;
    pool.query(`SELECT * FROM company WHERE name = ${company}`)
}
const verifyCandidate = (request) => {
    var {email,password} = request.body;
    var hash = hashPassword(password)
    pool.query(`SELECT password FROM candidates WHERE email = ${email}`, (err, results) => {
        if (err) {
            throw err
        }
        if (response) {
            var realPass = response
        }});
    if(hash == realPass){
        return true
    }
    return false
}

const hashPassword = (password) =>{
    var hash = 0;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash;
    }
    return hash;
}

const createCompanyTable = (request,response) => {
    pool.query('CREATE TABLE IF NOT EXISTS company(email VARCHAR PRIMARY KEY, name VARCHAR, positions VARCHAR, postingID UUID REFERENCES postings(postingID) ON DELETE CASCADE) ',(err, results) => {
        if (err) {
            throw err
        }
        if (response) {
            response.status(200).json(results.rows);
        }});

}
const createCompany = (request,response) => {
    var {email,name,posting} = response;
    pool.query('INSERT INTO company (email,name,postingID) VALUES(email,name,posting)', (err, results) => {
        if (err) {
            throw err
        }
        if (response) {
            response.status(200).json(results.rows);
        }})
}
const findCompany = (request,response) => {
    var {company} = response;
    pool.query(`SELECT * FROM company WHERE name = ${company}`)
}

const createPostingsTab = (request, response) => {
    pool.query('CREATE TABLE IF NOT EXISTS postings (postingID UUID PRIMARY KEY, company VARCHAR REFERENCES company(name) ON DELETE CASCADE, position VARCHAR )', (err, results) => {
        if (err) {
            throw err
        }
        if (response) {
            response.status(200).json(results.rows);
        }})
}

const createPosting = (request,response) => {
    var {postingID, company, position} = response;
    pool.query('INSERT INTO postings (postingID, company, position) VALUES(DEFAULT,company,position)', (err, results) => {
        if (err) {
            throw err
        }
        if (response) {
            response.status(200).json(results.rows);
        }})
}
const findPosting = (request,response) => {
    var {position} = response;
    pool.query(`SELECT * FROM postings WHERE position = ${position}`)
}



module.exports = {
    createUserTable,
    getUsers,
    createCandidate,
    verifyCandidate,
    createCompanyTable,
    createCompany,
    createPostingsTab,
    createPosting,
    findCompany,
    findPosting
}