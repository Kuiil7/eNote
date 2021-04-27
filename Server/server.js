const path = require('path')
const mongoose = require("mongoose");
const cors = require("cors");
const mongodbUri = require("mongodb-uri");

require('dotenv').config()


const MongoDB_URI= `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pwegs.gcp.mongodb.net/notesDB`

mongoose.connect(MongoDB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true

}
  ).catch((e) => {
  console.error('Connection error', e.message);
});

const cluster = mongoose.connection;

cluster.on('error', console.error.bind(console, 'Connection error: '));

cluster.once('open', function callback () {
    console.log('Successfully👌🏿connected to MongoDB via Atlas!🙌🏿 ');
});





const express = require('express'),
			app = express();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use('/', require('./routes/noteRoute'))



  const listener = app.listen(5000, function(){
    console.log('eNote is now 🌎 live! ' + listener.address().port);
  });