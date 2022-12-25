import React from 'react';
import {Link} from 'react-router-dom';
import './petProfile.css';
import {connect} from 'react-redux';
import {deleteAnimal} from '../../actions';

export function PetProfile(props) {

  function getBtn() {
    if (props.dashboardView) {
      return <a className='remove' onClick={(e) => removeAnimal(e)}>Remove</a>;
    }
  }

  function getShelterInfo() {
    if (!props.dashboardView) {
      return <p><b>Shelter: </b>{props.shelter}</p>;
    }
  }

  function getAnimalName() {
     if (props.dashboardView) {
      return <h3>{props.animal.name}</h3>;
     } 
     else {
      return <h3><Link to={`/search/${props.petId}`}>{props.animal.name}</Link></h3>;
     }
  }

  function removeAnimal(e) {
    const animalId = props.animals[props.index]._id;
    props.dispatch(deleteAnimal(props.shelterId, animalId));
  }

  return (
    <div className='pet-profile'>
      <img className="dummy-image" alt="Pet" src={props.animal.image} />
        <div className="info">
          <div className="editing">
            {getAnimalName()}
            {getBtn()}
          </div> 
          <p><b>Type:</b> {props.animal.type}</p>
          {getShelterInfo()}
          <p>Let's find this animal a home!</p> 
        </div>    
    </div>
  );
}

const mapStateToProps = (state) => ({
  animals: state.logIn.loggedInShelter.animals
});

export default connect(mapStateToProps)(PetProfile);