const express = require('express');
const router = express.Router();
const EmpController = require('../controllers/todo-list-controller');

//obtener todo
router.get('/', EmpController.getEmployees);

//Guardar
router.post('/', EmpController.createEMployees);

//Obtener por id
router.get('/:id', EmpController.getEmployee);

//Actualizar
router.put('/:id',EmpController.editEmployee);

//Eliminar
router.delete('/:id',EmpController.deleteEmployee);

module.exports = router;