import React from 'react';
import './shelterSignUp.css';
import {connect} from 'react-redux';
import {logInSuccess} from '../../actions';

export class ShelterSignUp extends React.Component {

  postShelter() {
    const payload = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      address: this.refs.address.value,
      zipcode: this.refs.zipcode.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
    };
    return fetch('../../../api', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(payload)
    })
    .then(res => { 
      this.refs.name.value = '';
      this.refs.email.value = '';
      this.refs.password.value = '';
      this.refs.address.value = '';
      this.refs.zipcode.value = '';
      this.refs.city.value = '';
      this.refs.state.value = '';
      console.log('POST Success');
      return res.json(); 
    })
    .then(shelterDoc => {
      console.log(shelterDoc);
      this.props.dispatch(logInSuccess(shelterDoc));
    })
    .catch(err => console.error(err));
  }

  handleRegister(event){
    event.preventDefault();
    this.postShelter();
  }

  render() {
    return(
      <div>
        <div className="register-container">
          <h2>Shelter Sign Up</h2>
          <h4>Complete the fields below to sign up!</h4>
          <form onSubmit={(e)=> this.handleRegister(e)}>
            <input id="name" placeholder="Name" ref='name' /><br />
            <input id="email" placeholder="Email" ref='email' /><br />
            <input id="password" placeholder="Password" ref='password' /><br />
            <input id="address" placeholder="Address" ref='address' /><br />
            <input id="zipcode" placeholder="Zipcode" ref='zipcode' /><br />
            <input id="city" placeholder="City" ref='city' /><br />
            <input id="state" placeholder="State" ref='state' /><br />
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(ShelterSignUp);