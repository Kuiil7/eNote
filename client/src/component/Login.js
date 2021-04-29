import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import isAuthenticated from '../lib/isAuthenticated'

export default class Login extends Component {

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

    fetch('/api/login', {
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


          <section className="hero is-primary is-fullheight">
          <div className="hero-body ">

            <div >

             <form onSubmit={this.submit.bind(this)}>
               <div className="container column ">
               <div >
               <p className="title has-text-centered">
            WELCOME TO LOGIN PAGE!
            </p>
                      <label> USERNAME: </label>
                      <input type="text" name="username" pattern=".{2,16}" required
              className="input mb-2"/>
                    </div>
                    <div>
                      <label> PASSWORD: </label>
                      <input type="password" name="password" pattern=".{6,20}" required
              className="input mb-2"
               />

                    </div>
                    <div>




                      <div class="control">
          <button className="button is-primary is-inverted mt-2" type="submit" value="Sign up" >Submit</button>
        </div>
                    </div>


               </div>

                  </form>
            </div>

          </div>
        </section>


        </div>
                </div>
      )
    }
  }
}
