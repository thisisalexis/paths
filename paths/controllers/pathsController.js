const express = require("express");
const pathsService = require('../services/pathsService');

const app = express();

exports.getAllPaths = (req, res) => {
    
    console.log(req, res); //TODO delete this

    let allPaths = pathsService.getAllPaths(); 

    res.status(200).json(allPaths);

};

exports.addPath = (req, res) => {
    
    console.log(req, res);

    return res.status(201).json({"created": true});

};

exports.deletePath = (req, res) => {

    console.log(`Deleting path with id ${req.params.id}`);

    res.status(200).json({"deleted": true});

} ;

exports.getPathById = (req, res) => {
    console.log(`Consultando el id ${req.params.id}`);
    res.status(200).json({ 
        "id": req.params.id
     });
};

exports.searchPaths = (req, res) => {

    console.log(`Searching by request params ${req}`);
    return res.status(200).json([defaultPath]);

}
