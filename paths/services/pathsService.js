var express = require('express');

var app = express();

 const defaultPath = { 
    "id": "1",
    "name": "My first learning Path",
    "description": "Long description",
    "createdBy": "thisisalexis",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "rate": 5,
    "category": 50,
    "visualizations": 661234,
    "numberOfSteps": 10, 
    "language": "en_US"
 };

 module.exports.defaultPath = this.defaultPath;

/**
 * Get all paths registered in DB
 */
module.exports.getAllPaths = () => {
    console.log('[pathsService][getAllPaths][paths_ini] Starting getting all existing paths');
    
    let allPaths = [defaultPath, defaultPath, defaultPath, defaultPath, defaultPath];

    console.log('[pathsService][getAllPaths][paths_finOk] Completed');

    return allPaths;
};

module.export = {};