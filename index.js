const express = require('express');
const ehb = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;
const conn = require('./db/conn');
const Task = require('./models/Task');

app.engine('handlebars', ehb.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('home')
})

conn.sync()
    .then((result) => {
    app.listen(port, console.log(`Servidor rodando na porta ${port}`));
    })
    .catch((err) => {
    console.log(`Error ao execultar o servidor ${err}`);
});
