require('dotenv').config();

const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.dbUser,
    password: process.env.dbPassword,
    database: 'agenda-petshop'
})

module.exports = conexao

