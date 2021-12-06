import React, { Component, SyntheticEvent } from 'react'
import '../Login.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class Register extends Component {
  first_name = ''
  last_name = ''
  email = ''
  password = ''
  password_confirm = ''
  state = {
    redirect: false
  }

  submit = async (e: SyntheticEvent) => {
    e.preventDefault()

    // console.log({
    //   first_name: this.first_name,
    //   last_name: this.last_name,
    //   email: this.email,
    //   password: this.password,
    //   password_confim: this.password_confirm
    // })
    
    axios.post("http://localhost:8000/api/register", {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      password_confim: this.password_confirm
    });

    this.setState({
      redirect: true
    });
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to={'/login'} />;
    }

    return (
      <main className="form-signin">
        <form onSubmit={this.submit}>
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <div className="form-floating">
            <input className="form-control" placeholder="First Name" required 
              onChange={e => this.first_name = e.target.value}
            />            
            <label htmlFor="floatingFistName">First Name</label>
          </div>
          <div className="form-floating">
            <input className="form-control" placeholder="Last Name" required 
              onChange={e => this.last_name = e.target.value}
            />            
            <label htmlFor="floatingLastName">Last Name</label>
          </div>
          <div className="form-floating">
            <input type="email" className="form-control" placeholder="Email" required 
              onChange={e => this.email = e.target.value}
            />            
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" placeholder="Password" required 
              onChange={e => this.password = e.target.value}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" placeholder="Password Confirm" required 
              onChange={e => this.password_confirm = e.target.value}
            />
            <label htmlFor="floatingPasswordConfirm">Password Confirm</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
      </main>
    )
  }
}


