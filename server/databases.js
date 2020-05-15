const mongoose = require('mongoose');

const URI = 'mongodb://localhost/todo-list';

mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true }).then(
    db => console.log('Base de Datos Conectada')
).catch(
    err => console.error(err)
);

module.exports = mongoose;