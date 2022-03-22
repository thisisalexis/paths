const express = require("express");
const app = express();

let defaultPath = { 
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

exports.getAllPaths = (req, res) => {
    
    console.log(req, res); //TODO delete this

    res.status(200).json([defaultPath, defaultPath, defaultPath, defaultPath, defaultPath, defaultPath]);

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
