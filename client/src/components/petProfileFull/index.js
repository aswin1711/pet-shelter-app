import React from 'react';
import './petProfileFull.css';
import { connect } from 'react-redux';

export function PetProfileFull(props) {
  console.log(props.shelters);
  let animalObj;
  let shelterObj;
  props.shelters.forEach(shelter => {
    shelter.animals.forEach(animal => {
      if (props.id === animal._id) {
        animalObj = animal;
        shelterObj = shelter;
      }
    })
  })
  return(
    <div className="pet-profile-container">
      <div className="general-info">
        <div className="dummy-container">
          <img className="dummy-image-full" src={animalObj.image} alt='Animal'/>
        </div>
        <div className="stats">
          <h1>{animalObj.name}</h1>
          <p>Age: {animalObj.age}</p>
          <p>Shelter: {shelterObj.name || shelterObj.shelter }</p>
          <p>Location: {shelterObj.address} {shelterObj.city} {shelterObj.state}, {shelterObj.zipcode} </p>
          <p>Status: {animalObj.status}</p>
          <p className="blurb">Let's find this animal a home!</p>
        </div>
      </div>
    </div>
  );
}
const mapPropsToState = state => ({
  shelters: state.shelters.data
})

export default connect(mapPropsToState)(PetProfileFull)