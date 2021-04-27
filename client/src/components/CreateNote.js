import React, {useState} from 'react';

import Notes from './Notes';



const axios = require('axios').default;


function CreateNote () {


    const [input, setInput] = useState({
        title:'',
        content: ''
    })

    function handleChange (e) {
        const {name, value} = e.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value        }
        }

        )
    }

    function handleClick (e) {
    e.preventDefault();
    console.log(input)

    const newNote = {
        title: input.title,
        content: input.content
    }
    axios.post('http://localhost:5000/create', newNote)
}





    return <div className="container p-2">

        <h3>
     Title
        </h3>

        <input className="input mb-2 is-success" type="text" placeholder="Title input" name="title" onChange={handleChange} />
        <h1>
     Content
        </h1>
        <input className="input mb-3 is-success" type="text" placeholder="Content input" name="content" onChange={handleChange} />

        <button className="button mr-2 is-primary" onClick={handleClick}>ADD NOTE</button>

        <button className="button mr-2 is-warning">EDIT NOTE</button>
        <button className="button mr-2 is-danger">DELETE NOTE</button>


        <Notes />
    </div>


}

export default CreateNote;