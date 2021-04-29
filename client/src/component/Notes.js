//import axios from 'axios';
import React, { useEffect, useState} from 'react';

//import ButtonDelete from './ButtonDelete';

const moment = require('moment');




function Notes ()  {




const [notes, setNotes] = useState(



    [
       {
        title: "",
        content: ""
       }])

       useEffect(() => {
       fetch('/notes').then(res => {
           if (res.ok){
               return res.json()
           }

       }).then(jsonRes => setNotes(jsonRes));



       })





       const content = notes.map((note, index) =>


       <li key={index}>
      <article className="message  mt-4 mb-0 pb-3" >
<div className="message-header ">
<h3 className="is-size-2">{note.title}</h3>


<p className="is-pulled-right is-italic pl-2"> {moment(note.createdAt).format('LLL')
} </p>


</div>
<div className="message-body ">
<p className="is-size-3">{note.content}</p>
<p className="is-pulled-right is-italic"> Updated on: {moment(note.date).format('llll')
}</p>
</div>


</article>


<button className="button is-small mr-2 is-warning mb-4"  >EDIT NOTE</button>
<button className="button is-danger is-small" onClick={() => this.handleRemove()}>DELETE</button>

       </li>

     );


    return<div className="container
    " >
   <div  >

{content}

    </div>






          </div>


}


export default Notes;