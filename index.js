const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
app.use(bodyParser.json());

const { mongoose } = require('./db.js');

//var employeeController = require('./controllers/employeeController');
var product_controller = require('./controllers/product_controller');



app.use(cors());


//app.use('/', employeeController);
app.use('/product_details' ,product_controller);
//app.use('/usersofdevice',usersofdevice)
app.listen(process.env.PORT || 4000, () => console.log('Server started at port : 4000'));