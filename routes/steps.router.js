const express = require('express');
const router = express.Router();
const stepsController = require ('../paths/controllers/steps.controller');

router.route('/')
    .get(stepsController.getByPathId);

module.exports = router;