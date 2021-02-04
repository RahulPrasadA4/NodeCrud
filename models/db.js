const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/employeeDB', {useNewUrlParser: true}, (err)=>{
    if(!err){console.log('Mongo connected')}
    else{console.log('Error'+err)}
});

require('./employee.model');