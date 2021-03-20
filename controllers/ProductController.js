const db = require('../config/db');


module.exports = {
    //Lista de Itens no Banco de Dados
    async insert(req, res) {
        let datas = {
            "descricao": req.body.descricao,
            "quantidade": req.body.quantidade,
            "preco": req.body.preco
        }

        try {
            await db.query('CREATE TABLE IF NOT EXISTS produtos (id INT(10) PRIMARY KEY AUTO_INCREMENT, descricao varchar(50) NOT NULL, quantidade varchar(10), preco varchar(10))')
            let response = await db.query('INSERT INTO produtos SET ?', [datas]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    // Editando ou alterando Item no Bando de Dados
    async update(req, res) {
        let id = req.params.id;

        let datas = {
            "descricao": req.body.descricao,
            "quantidade": req.body.quantidade,
            "preco": req.body.preco
        }

        try {
            await db.query('CREATE TABLE IF NOT EXISTS produtos (id INT(10) PRIMARY KEY AUTO_INCREMENT, descricao varchar(50) NOT NULL, quantidade varchar(10), preco varchar(10))')
            let response = await db.query('UPDATE produtos SET ? WHERE id = ?', [datas, id]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    // Consulta de determinado item localizando pelo ID
    async showID(req, res) {
        let id = req.params.id;
        try {
            await db.query('CREATE TABLE IF NOT EXISTS produtos (id INT(10) PRIMARY KEY AUTO_INCREMENT, descricao varchar(50) NOT NULL, quantidade varchar(10), preco varchar(10))')
            let response = await db.query(`SELECT * FROM produtos WHERE id = ${id}`);
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },
    // Lista de todos os produtos
    async showAll(req, res) {
        try {
            await db.query('CREATE TABLE IF NOT EXISTS produtos (id INT(10) PRIMARY KEY AUTO_INCREMENT, descricao varchar(50) NOT NULL, quantidade varchar(10), preco varchar(10))')
            let response = await db.query('SELECT * FROM produtos');
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },
    // Excluindo Item no Banco de Dados
    async delete(req, res) {
        let id = req.params.id;
        try {
            await db.query('CREATE TABLE IF NOT EXISTS produtos (id INT(10) PRIMARY KEY AUTO_INCREMENT, descricao varchar(50) NOT NULL, quantidade varchar(10), preco varchar(10))')
            let response = await db.query(`DELETE FROM produtos WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }
};