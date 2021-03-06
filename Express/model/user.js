const mongoose = require('mongoose');

const user = new mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   email : 
   {
       type: String, 
       required: true
    },
   username :
   {
       type : String,
       require : true
   },
   password : 
   {
       type: String, 
       required: true
    }
});

module.exports = mongoose.model('User', user);