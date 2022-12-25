import React from 'react';
import {connect} from 'react-redux';
import {fetchSheltersData} from '../../actions';
import './search.css';
import PetProfile from '../petProfile';

export class Search extends React.Component {

  handleSearch(e) {
    e.preventDefault();
    this.props.dispatch(fetchSheltersData(this.inputType.value, this.inputZip.value));
  }

  // map over props.shelters if the data has been retrieved already
  getAnimals() {
    let animals = [];
    if (this.props.shelters.length > 0) {
      this.props.shelters.forEach((shelter, forEachIndex) => {
        let animalsCurr = shelter.animals.map((animal, index) => {
          return <PetProfile petId={animal._id} key={`${index}${forEachIndex}`} index={index} 
          animal={animal} dashboardView={false} shelter={shelter.name} shelterZip={shelter.zipcode}/>
        });
        animals.push(animalsCurr);
      });

      animals = animals.reduce((flat, toFlatten) => {
        return flat.concat(toFlatten);
      }, []);
      
      //Filter animals here...
      let filteredAnimals = this.filterAnimals(animals);
      if (filteredAnimals.length === 0) {
        return animals;
      }
      else {
        return filteredAnimals;
      }
    }
  }

  filterAnimals(animals) {
    const filterType = this.props.filterType.trim().toLowerCase();
    const filterZip = this.props.filterZip.trim().toLowerCase();
    const checkFilterType = filterType !== "" && filterType !== " " && filterType !== undefined;
    const checkFilterZip = filterZip !== "" && filterZip !== " " && filterZip !== undefined;
    if (checkFilterType && checkFilterZip) {
      return animals.filter(animal => {
        return animal.props.animal.type.toLowerCase() === filterType && animal.props.shelterZip.toLowerCase() === filterZip;
      });
    }
    else if (checkFilterType) {
      return animals.filter(animal => {
        return animal.props.animal.type.toLowerCase() === filterType;
      });
    }
    else if (checkFilterZip) {
      return animals.filter(animal => {
        return animal.props.shelterZip.toLowerCase() === filterZip;
      });
    } 
    return animals;
  }

  render() {
    return (
      <div className='search'>
        <div className='form-container'>
          <h3>Find a pet to adopt</h3> 
          <form>
            <div className="pet-search-field">
              <label className="type-lable" htmlFor='type'>
                <span className="type-text">Type</span><br />
                <input className="type-input" placeholder='Type of pet' type='text' id='type' ref={input => this.inputType = input} />
              </label>
            </div>
            <div className="pet-search-field">
              <label className="type-lable" htmlFor='zip'>
                <span className="type-text">Zip</span>
                  <input className="type-input" placeholder='Zip code' type='text' id='zip' ref={input => this.inputZip = input} />
              </label>
            </div>
            <div className="pet-search-field">
              <button onClick={(e) => this.handleSearch(e)}>Search</button>
            </div>

          </form>
        </div>
        <div className='animal-container'>
          {this.getAnimals()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  shelters: state.shelters.data,
  filterType: state.shelters.filterType,
  filterZip: state.shelters.filterZip
});

export default connect(mapStateToProps)(Search);