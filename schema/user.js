var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
var User = new Schema({
      
CustomerPO    :String,    
ContainerId   :String,
ContainerType :String,
TrackingId    :String,
ShipmentId    :String,
Carrier       :String,
Service       :String,
Container     :String,
      
date: { type: Date, default: Date.now }

});


var date = new Date()

module.exports = mongoose.model('User', User);