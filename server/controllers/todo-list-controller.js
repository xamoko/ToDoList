const models = require('../models/todo-list');
const employeeCtrl = {}

//Guardar
employeeCtrl.getEmployees = async (req, res) => {
    /* res.json({
        status: 'Obtener'
    }); */
    const datos = await models.find();
    res.json(datos);
}

//Obtener por id
employeeCtrl.createEMployees = async (req,res) => {

    const datos = new models({
        nombre: req.body.nombre,
        especialidad: req.body.especialidad,
        consultorio: req.body.consultorio,
        numerotelefono: req.body.numerotelefono
    });
    await datos.save();
    res.json({
        "status":"guardado"
    });
}

//Actualizar
employeeCtrl.getEmployee = async (req,res) => {
    const dataById = await models.findById(req.params.id);
    res.json(dataById);
}

//Eliminar
employeeCtrl.editEmployee = async (req,res) => {
    const { id } = req.params;

    const newdata = {
        nombre: req.body.nombre,
        especialidad: req.body.especialidad,
        consultorio: req.body.consultorio,
        numerotelefono: req.body.numerotelefono
    };

    const edit = await models.findByIdAndUpdate(id,{$set:newdata},{new:true});

    res.json({
        status:"Actualizado"
    })
}

employeeCtrl.deleteEmployee = async (req,res) => {
    await models.findByIdAndRemove(req.params.id);
    res.json({
        status:"Eliminado"
    });
}
module.exports = employeeCtrl;