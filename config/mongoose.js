const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contact_list_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

db = mongoose.connection;

db.on('error' , console.error.bind(console , 'error connecting to db'));

db.once('open',function(){
    console.log('db connected!');
    
})

