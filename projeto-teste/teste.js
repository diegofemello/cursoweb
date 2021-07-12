const express = require('express')
const app = express()
const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://dfmello:rsxNQN68yPy8gkFm@diego.7agse.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    app.emit('pronto');
    })
    .catch(e => console.log(e));


app.on('pronto', () => {
app.listen(3000, () => {
console.log('Acessar http://localhost:3000');
console.log('Servidor executando na porta 3000');
});
});