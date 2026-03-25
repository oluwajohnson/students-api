const express = require('express');
const router = express.Router();

const controller = require('../controllers/courses');

router.get('/', controller.getAllCourses);

module.exports = router;