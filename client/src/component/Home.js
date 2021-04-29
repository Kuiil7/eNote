import React, { Component } from 'react'
import CreateNote from '../component/CreateNote'

//import NoteForm from './NoteForm'
require('dotenv').config()


export default class Home extends Component {

  constructor(props) {
    super(props)



    this.state = {
      user: {},


    }
  }

  componentDidMount() {
    fetch('/api/user', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => {
      return res.json()

    }).then(user => {
      this.setState({
        user: user
      })
    }).catch( err => {
      console.log(err)
    })
  }



  onSubmit(e) {
    e.preventDefault()


  }




  render() {

    let username = this.state.user.username

    function capitalize(s)
    {
        return s && s[0].toUpperCase() + s.slice(1);
    }

    return (
      <div className="container  ">

        <section className="hero is-Small is-primary">
        <div className="hero-body ">
    <p className="title has-text-centered">
    Welcome to eNote, {capitalize(username)}!
    </p>

  </div>
</section>

<div className="columns  mt-6">
  <div className="column">

<CreateNote />
  </div>

</div>
      </div>
    )
  }



}
