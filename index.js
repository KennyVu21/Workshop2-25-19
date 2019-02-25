const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express(); 


//Connection URL
const url = 'mongodb://Nick:SecWorkshop2@ds133202.mlab.com:33202/nasa-missions';
const databasename = 'nasa-missions';



MongoClient.connect(url, function(err,client){
    if(err){
        console.log(err);
    }

    const db = client.db(databasename);

app. listen(9001, () =>{
    console. log('NASA Server launched on port 9000');
    });
app.get('/', (req,res) =>{
    res.status (200).json({message: "Welcome to the NASA mission api"});
    });

//app.post('/missions', res)
        
app.get('/missions',(req,res) =>{
    db.collection('missions')
        .find()
        .toArray(function(err, doc){
            if(err){
                console.error(err);
                res.status(500).json ({message: "Houston we have a problem"})
            }
            else {
                res.status(200).json(doc);
            }
            });
        
            
});

})

