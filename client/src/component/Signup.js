import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import isAuthenticated from '../lib/isAuthenticated'

export default class Signup extends Component {





  constructor(props) {
    super(props)

    this.state = {
      loggedin: isAuthenticated()
    }
  }

  submit(e) {
    e.preventDefault()
    e.stopPropagation()

    let form = e.target
    let formData = new FormData(form)
    let params = new URLSearchParams(formData)

    fetch('/api/signup', {
      method: 'POST',
      body: params
    }).then( (res) => {
      return res.json()
    }).then(data => {
      localStorage.setItem('token', data.token)
      this.setState({loggedin: true})
    }).catch( (err) => {
      console.error(err)
    })
  }

  render() {
    if ( this.state.loggedin ) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: this.props.location }
          }}
        />
      )
    } else {
      return (

        <div className="has-background-primary has-text-light">


        <div className="column is-half
        is-offset-one-quarter">


  <section className="hero  is-fullheight ">

  <div className="hero-body ">


     <form onSubmit={this.submit.bind(this)}>
       <div className="container column ">

       <div >
       <p className="title has-text-light ">
    WELCOME TO SIGN-UP PAGE!
    </p>
              <label> USERNAME: </label>
              <input type="text" className="input mb-2" name="username" pattern=".{2,16}" required />
            </div>
            <div>
              <label> PASSWORD: </label>
              <input type="password" className="input mb-2" name="password" pattern=".{6,20}" required />

            </div>
            <div>




              <div class="control">
  <button className="button is-primary is-inverted mb-2" >Submit</button>
</div>
            </div>


       </div>

          </form>
          <div >
    </div>

  </div>
</section>





</div>
        </div>
      )
    }
  }
}
