const mongoose = require('mongoose');


const notesSchema = {

  title: String,
  content: String,
  date: { type: Date, default: Date.now },

}


const Note = mongoose.model('Note', notesSchema)

module.exports = Note;
