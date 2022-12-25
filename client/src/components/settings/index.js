import React from 'react';
import { connect } from 'react-redux';
//import { hashHistory } from 'react-router';
import { saveSettings } from '../../actions';
import './settings.css';

export class Settings extends React.Component{
 
  handleSave(event){
    event.preventDefault();
    this.props.dispatch(saveSettings());
    this.props.history.push('/shelters/dashboard');
  }
  render(){
    console.log(this.props.shelter, "TEST")
    return(
      <div className="settings-container">
        <h1>Settings</h1>
        <p>Change your basic account settings.</p>
        <form className="settings">
          <label htmlFor="shelter-name">Shelter Name</label>
          <input id="username" type="text" placeholder={this.props.shelter.email} /><br/>

          <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder={this.props.shelter.name} /><br/>

          <label htmlFor="shelter options">Shelter Options</label>
          <select name="shelter-options" form="settings">
            <option value="remove">Remove Shelter</option>
            <option value="update">Update Shelter</option>
          </select><br/>
          <div className='save'>
            <button onClick={(e)=> this.handleSave(e)}className="save-btn">Save</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shelter: state.logIn.loggedInShelter
})

export default connect(mapStateToProps)(Settings)