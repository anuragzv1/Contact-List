var express = require('express');
var path = require('path');
const port = 3030;

var db = require('./config/mongoose');
const app = express();
const Contact = require('./models/contacts');

var MAIN_LIST = [];
MAIN_LIST.push({
    "number": "8800299509",
    "name": "Anurag"
});
console.log(MAIN_LIST);



app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded());
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {

    Contact.find({} , function(err , contacts_fromdb){
        if(err){
            console.log('error fetching from db');
            return;
        }
        res.render('index', {data:contacts_fromdb});
    });
});

app.post('/addcontact', (req, res) => {
    console.log(req.body);
    Contact.create(req.body,function(err,contact){
        if(err){
            console.log('error creating contact ',err);
            return;
        }
        console.log('*****',contact);
        res.redirect('/');
    });
    

});

app.get('/deletecontact',  (req,res)=>{
    console.log(req.query.name);
    
    Contact.findByIdAndDelete({_id : req.query.id} , function(err){
        if(err){
            console.log('unable to delete');
            return;
        }
        else{
            console.log('Deleted');
            
        }
    });
    res.redirect('/');
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Server running at port ${port}`);

});



