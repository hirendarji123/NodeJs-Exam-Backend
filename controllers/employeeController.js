const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');


// => localhost:3000/
// ----------------------get all data-----------------------
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); }
         else 
         { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});
// --------------------get data with id -------------------------
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

// -------------------------insert data -------------------

router.post('/', (req, res) => {
    console.log(req.body);
    var emp = new Employee({

        userName: req.body.userName,
        userId: req.body.userId,
        deviceName: req.body.deviceName,
        department: req.body.department,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});


// -------------------------update data-----------------------------

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        userName: req.body.userName,
        userId: req.body.userId,
        deviceName: req.body.deviceName,
        department: req.body.department,
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
// --------------------------delete data----------------

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;