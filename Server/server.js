const path = require('path')
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config()



mongoose.connect( 'mongodb+srv://dbJoey:rose44@cluster0.pwegs.gcp.mongodb.net/notesDB' );


const express = require('express'),
			app = express(),

flash = require('connect-flash')

app.use(cors());

app.use(express.json());


app.use('/', require('./routes/noteRoute'))

app.get('*', function(req, res) {
    res.status(404).end();
  });

const listener = app.listen(5000, function(){
    console.log('Wheres My Beer is now 🌎 ' + listener.address().port);
  });