const express = require('express');
const router = express.Router();

const controller = require('../controllers/students');
const { validateStudent } = require('../middleware/validate');

router.get('/', controller.getAll);
router.get('/:id', controller.getSingle);
router.post('/', validateStudent, controller.createStudent);
router.put('/:id', validateStudent, controller.updateStudent);
router.delete('/:id', controller.deleteStudent);

module.exports = router;