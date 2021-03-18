const express = require('express')
const app = express()

app.use(express.json());

// app.get('/', (req, res) => {
//     res.json({ 'API': 'OK' })
// })

// app.get('/usuario/:id', (req, res) => {
//     let id = req.params.id;
//     res.json({ 'id': id })
// })

// app.post('/cliente/:id', (req, res) => {

//     res.json(req.body)
// })

const ControllerUsers = require('./controllers/ControllerUsers');

//USUARIOS
app.post('/usuario/insert',     ControllerUsers.insert);
app.put('/usuario/update/:id',  ControllerUsers.update);
app.get('/usuarios',            ControllerUsers.findAll);
app.get('/usuario/:id',         ControllerUsers.findById);
app.delete('/usuario/:id',      ControllerUsers.delete);

// FUNCIONARIOS


const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
    console.log(`API INICIADA NA PORTA => ${PORT}`)
})