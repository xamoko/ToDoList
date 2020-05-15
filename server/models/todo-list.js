const mongoose = require('mongoose');
const {Schema} = mongoose;

const EmployeSchema =new Schema({
    nombre: { type: String, required:true},
    especialidad: {type: String, required: true},
    consultorio: { type: String, required: true},
    numerotelefono: {type: Number, required: true}
});

module.exports = mongoose.model('ToDo-ListDB', EmployeSchema);