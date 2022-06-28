const db = require("../models");
// const User  = require('../models/user')(sequelize, DataTypes);
const console = require('console');
const User = db.user;
const Op = db.Sequelize.Op;
// Create and Save a new User
exports.create = (req, res) => {

    console.log('We received the following params (name, email, sex)');
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.sex);
    // Create a User
    const user = {
        name: req.body.name,
        email: req.body.email,
        sex: req.body.sex
    };
    // Save User in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user."
            });
        });
};
// Retrieve all users from the database.
exports.findAll = (req, res) => {

};
// Find a single user with an id
exports.findOne = (req, res) => {

};
// Update a user by the id in the request
exports.update = (req, res) => {

};
// Delete a user with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all users from the database.
exports.deleteAll = (req, res) => {

};
