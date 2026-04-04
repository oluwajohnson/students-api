// const express = require('express');
// const router = express.Router();

// const controller = require('../controllers/students');
// const { validateStudent } = require('../middleware/validate');

// router.get('/', controller.getAll);
// router.get('/:id', controller.getSingle);
// router.post('/', validateStudent, controller.createStudent);
// router.put('/:id', validateStudent, controller.updateStudent);
// router.delete('/:id', controller.deleteStudent);

// module.exports = router;





const express = require('express');
const router = express.Router();

const controller = require('../controllers/students');
const { validateStudent } = require('../middleware/validate');
const { isAuthenticated } = require('../middleware/auth');

// Public
router.get('/', controller.getAll);
router.get('/:id', controller.getSingle);

// Protected
router.post('/', isAuthenticated, validateStudent, controller.createStudent);
router.put('/:id', isAuthenticated, validateStudent, controller.updateStudent);
router.delete('/:id', isAuthenticated, controller.deleteStudent);

module.exports = router;