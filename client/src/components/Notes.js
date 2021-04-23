import React, { useEffect, useState } from 'react';

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

    return<div className="container
    ">



  {notes.map( note =>

    <div class="card mb-3, mt-3 p-2">
  <div class="card-content">
    <div class="content">


<div >
 <button class="button is-large is-primary"><strong>{note.title}</strong></button>


          <p className="content">{note.content}</p>
</div>
</div>
</div>
    </div>
        )}
        <br/>
          </div>


}


export default Notes;