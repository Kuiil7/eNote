const path = require('path')
const mongoose = require("mongoose");
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser');

const uri =  process.env.MONGO_URI;
const mongodbUri = require("mongodb-uri");

const mongooseConnectString = mongodbUri.formatMongoose(uri);
mongoose.connect(mongooseConnectString,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
});

const cluster = mongoose.connection;

cluster.on('error', console.error.bind(console, 'Connection error: '));

cluster.once('open', function callback () {
    console.log('Successfully 👌🏿 connected to MongoDB! 🙌🏿 ');
});

const express = require('express'),
			app = express();
            app.use(cors());


passportControl = require('./lib/passport-control')

app.use(express.urlencoded({ extended: true}))
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')))
app.use(passportControl.initialize())

app.use('/api', require('./routes'))
app.use('/', require('./routes/noteRoute'))

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });


const listener = app.listen(5000, function(){
    console.log('Wheres My Beer is now 🌎 ' + listener.address().port);
  });