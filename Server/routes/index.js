const express = require('express'),
			passport = require('passport'),
			jwt = require('jsonwebtoken'),
			User = require('../db/User'),
			router = express.Router()
			const Note = require ("../db/noteModel");




router.post('/signup', (req, res) => {
	var user = new User({
		username: req.body.username,
		password: req.body.password
	})

	user.save().then(() => {


		const token = jwt.sign({id: user.id}, 'jwt_secret')
		res.json({token: token})

	}).catch((err) => {
		res.status().json({})
	})
})


router.post('/login', passport.authenticate('local', {
	session: false
}), (req, res) => {


	const token = jwt.sign({id: req.user.id}, 'jwt_secret')

	res.json({token: token})
})


router.get('/user', passport.authenticate('jwt', {
	session: false
}), (req, res) => {
	if ( !req.user ) {
		res.json({
			username: 'nobody'
		})
	}

	res.json({
		username: req.user.username
	})
})



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


module.exports = router
