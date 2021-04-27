
import React from 'react';

import CreateNote from './CreateNote';





function Home () {

    return <div>

<section className="hero is-small is-primary has-text-justified ">
  <div className="hero-body ">
    <p className="title ">
     eNote
    </p>
    <p className="subtitle">
    Your cloud-based private note app
     </p>
  </div>
</section>
        <h1>
<CreateNote />
        </h1>
    </div>


}

export default Home;