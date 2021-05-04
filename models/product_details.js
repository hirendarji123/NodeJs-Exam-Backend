const mongoose = require('mongoose');

var product_details = mongoose.model('itemData',{
date:{type:Date},
silver: {type:Number},
gold: {type:Number},
એરંડા: {type:Number},
કપાસ: {type:Number},
તુવેર: {type:Number},
ચણા:{type:Number},
અડદ: {type:Number},
MAG: {type:Number},
સિંગદાણા: {type:Number},
black_તલ:{type:Number},
white_તલ: {type:Number},
લસણ: {type:Number},
વરિયાળી: {type:Number},
જીરું: {type:Number},
રાયડો: {type:Number},
ગવાર: {type:Number}
}
);

module.exports = { product_details };