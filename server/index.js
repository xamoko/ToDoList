const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express()
const port = 3000
const {mongoose} = require('./databases');

app.set('port', process.env.PORT || port)

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

app.use('/api/todo-list/',require('./routes/rutas'));

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(app.get('port'), () => {
    console.log(`Example app listenings at http://localhost:${port}`)
})