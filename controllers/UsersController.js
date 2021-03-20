const db = require('../config/db');

module.exports = {
    async insert(req, res) {
        let datas = {
            "nome": req.body.nome,
            "email": req.body.email,
            "senha": req.body.senha
        }
        try {
            await db.query('CREATE TABLE IF NOT EXISTS usuarios (id INT(10) PRIMARY KEY AUTO_INCREMENT, nome varchar(50) NOT NULL, email varchar(10), senha varchar(10))')
            let response = await db.query('INSERT INTO usuarios SET ?', [datas]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    async update(req, res) {
        let id = req.params.id;

        let datas = {
            "nome": req.body.nome,
            "email": req.body.email,
            "senha": req.body.senha
        }
        try {
            await db.query('CREATE TABLE IF NOT EXISTS usuarios (id INT(10) PRIMARY KEY AUTO_INCREMENT, nome varchar(50) NOT NULL, email varchar(10), senha varchar(10))')
            let response = await db.query('UPDATE usuarios SET ? WHERE id = ?', [datas, id]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    async showAll(req, res) {
        try {
            await db.query('CREATE TABLE IF NOT EXISTS usuarios (id INT(10) PRIMARY KEY AUTO_INCREMENT, nome varchar(50) NOT NULL, email varchar(10), senha varchar(10))')
            let response = await db.query('SELECT * FROM usuarios');
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },
    async showID(req, res) {
        let id = req.params.id;
        try {
            await db.query('CREATE TABLE IF NOT EXISTS usuarios (id INT(10) PRIMARY KEY AUTO_INCREMENT, nome varchar(50) NOT NULL, email varchar(10), senha varchar(10))')
            let response = await db.query(`SELECT * FROM usuarios WHERE id = ${id}`);
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },
    async delete(req, res) {
        let id = req.params.id;

        try {
            await db.query('CREATE TABLE IF NOT EXISTS usuarios (id INT(10) PRIMARY KEY AUTO_INCREMENT, nome varchar(50) NOT NULL, email varchar(10), senha varchar(10))')
            let response = await db.query(`DELETE FROM usuarios WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }
}