const mongoose = require('mongoose');

var Result = mongoose.model('results',{
    

    username: {  type: String ,required :true,},
    result: { type: Number ,required :true},
    date: { type: String ,required :true},
}
);

module.exports = { Result };