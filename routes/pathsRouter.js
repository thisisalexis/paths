const express = require("express");
const router = express.Router();
const pathsController = require("../paths/controllers/pathsController");

router.route('/')
        .get(pathsController.getAllPaths)
        .post(pathsController.addPath);

router.route('/:id')
    .get(pathsController.getPathById)
    .delete(pathsController.deletePath);

router.route('/search')
    .get(pathsController.searchPaths)

module.exports = router;
