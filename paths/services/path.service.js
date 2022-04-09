var express = require('express');
var pathRepository = require('../../repository/paths.repository');

var app = express();

module.exports.getAllPaths = () => {
    console.log('[paths.service][getAllPaths][paths_ini] Starting getting all existing paths');
    
    const paths = pathRepository.getAllPaths();

    console.log('[paths.service][getAllPaths][paths_finOk] Completed');

    return paths;
};

module.exports.addPath = (path) => {
    console.log('[paths.service][addPath][paths_ini] Adding a new path');

    const persistedPath = pathRepository.addPath(path);

    console.log('[paths.service][addPath][paths_finOk] Path added successfully');

    return persistedPath;
};

module.exports.getPathById = (pathId) => {
    console.log(`[paths.service][getPathById][paths_ini] Starting looking for path with id ${pathId}`);

    const path = pathRepository.getPathById(pathId);

    console.log(`[paths.service][getPathById][paths_finok] Path ${pathId} found`);

    return path;
};

module.exports.deletePathById = (pathId) => {
    console.log(`[paths.service][deletePathById][paths_ini] Starting deleting path with id ${pathId}`);

    const path = pathRepository.deletePathById(pathId);

    console.log(`[paths.service][deletePathById][paths_finok] Path ${pathId} deleted successfully`);

    return path;
};

module.exports.updatePathById = (pathId, newPath) => {
    
    console.log(`[paths.service][updatePathById][paths_ini] Updating path with id ${pathId}`);

    const path = pathRepository.updatePathById(pathId, newPath);

    console.log(`[paths.service][updatePathById][paths_finok] Path ${pathId} updated successfully`);

    return path;
};