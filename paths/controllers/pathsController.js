const express = require("express");
const app = express();

exports.getAllPaths = (req, res) => {
    
    console.log(req, res); //TODO delete this

    res.status(200).json({ 
        "_id": "0",
        "name": "My first learning Path",
        "createdBy": "thisisalexis"
     });

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
