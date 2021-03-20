const express = require('express')
const app = express()

app.use(express.json());

const UsersController = require('./controllers/UsersController');
const ProductController = require('./controllers/ProductController');

//USUARIOS
app.post('/usuario/insert',     UsersController.insert);
app.put('/usuario/update/:id',  UsersController.update);
app.get('/usuarios',            UsersController.showAll);
app.get('/usuario/:id',         UsersController.showID);
app.delete('/usuario/:id',      UsersController.delete);

// Produtos
app.post('/produto/insert',     ProductController.insert); // Inserir novo
app.put('/produto/update/:id',  ProductController.update); // Atualizar
app.get('/produtos',            ProductController.showAll); // Listagem
app.get('/produto/:id',         ProductController.showID); // Editar especifico 
app.delete('/produto/:id',      ProductController.delete); // Excluir


const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
    console.log(`API INICIADA NA PORTA => ${PORT}`)
})