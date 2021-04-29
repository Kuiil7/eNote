
const express = require('express')
const router = express.Router();
const Note = require ("../db/noteModel");

router.route("/create").post((req,res) => {
    const title = req.body.title;
    const content = req.body.content;

    const newNote = new Note ({
        title,
        content
    })
    newNote.save();

});

router.route("/notes").get((req, res) =>  {
    Note.find()
    .then(foundNotes => res.json(foundNotes))

}

)

/*
router.route("/deleteNotes").get((req, res) =>  {
    Note.deleteOne()
    .then(foundNotes => res.json(foundNotes))

}

)

*/

router.delete('DeleteNote',  async (req, res) => {
    try{
        await Note.findByIdAndDelete(req.body.id);
        return res.status(200).json({ success: true, msg: 'Note Deleted' });
    }
    catch(err){
        console.error(err);
    }
});


module.exports = router