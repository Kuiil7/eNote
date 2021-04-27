import React, { useEffect, useState } from 'react';

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
      <article className="message mb-4 p-2 " >
<div className="message-header ">
<h3>{note.title}</h3>
  <button className="delete" aria-label="delete"></button>
</div>
<div className="message-body">
<p>{note.content}</p>
<p className="is-pulled-right is-italic">{moment(note.date).format('llll')
}</p>
</div>
</article>
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