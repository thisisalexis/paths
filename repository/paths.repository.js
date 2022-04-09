const mongoose = require('mongoose');
const dbConfig = require('../configuration/db.config');
const PathModel = require('../models/path.model');

module.exports.addPath = async function(path) {
    try {
        console.log('[paths.repository][addPath][paths_ini] Starting adding path to database');

        const newPath = await PathModel.create(path);
    
        console.log('[paths.repository][addPath][paths_finok] Path added to database successfully');

        return newPath;

    } catch(error) {
        console.log('[paths.repository][addPath][paths_error] Error while adding new path to database');
        console.log(error);
        throw error;
    }

};

module.exports.getAllPaths = async function() {
    try {
        console.log('[paths.repository][getAllPaths][paths_ini] Starting querying all paths from database');

        const paths = await PathModel.find();

        console.log(paths);
    
        console.log('[paths.repository][getAllPaths][paths_finok] Finished successfully querying all paths from database');

        return paths;

    } catch(error) {
        console.log('[paths.repository][getAllPaths][paths_error] Error while getting all paths from database');
        console.log(error);
        throw error;
    }
};

module.exports.getPathById = async function(pathId) {

    try {
        console.log(`[paths.repository][getPathById][paths_ini] Starting looking for path with id ${pathId}`);

        const path = await PathModel.findById(pathId);

        console.log(`[paths.repository][getPathById][paths_finok] Path ${pathId} found`);

        return path;

    } catch(error) {
        console.log(`[paths.repository][getPathById][paths_error] Error while getting path with id ${pathId} from database`);
        console.log(error);
        throw error;
    }

};

module.exports.deletePathById = async function(pathId) {

    try {
        console.log(`[paths.repository][deletePathById][paths_ini] Starting deletion of path with id ${pathId}`);

        await PathModel.findByIdAndDelete(pathId);

        console.log(`[paths.repository][deletePathById][paths_finok] Path ${pathId} deleted`);

        return path;

    } catch(error) {
        console.log(`[paths.repository][deletePathById][paths_error] Error while deleting path with id ${pathId} from database`);
        console.log(error);
        throw error;
    }

};
module.exports.updatePathById = (pathId, newPath) => {

    try {

        console.log(`[paths.repository][updatePathById][paths_ini] Begins update of path with id ${pathId}`);

        const updatedPath = PathModel.findByIdAndUpdate(pathId, newPath, {new: true, upsert: false, runValidators: true});

        console.log(`[paths.repository][updatePathById][paths_finok] Path ${pathId} updated successfully`);

        return updatedPath;

    } catch(error) {
        console.log(`[paths.repository][updatePathById][paths_error] Error while updating path with id ${pathId} in database`);
        console.log(error);
        throw error;
    }

};