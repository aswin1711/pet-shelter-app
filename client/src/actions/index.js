export const FETCH_SHELTERS_REQUEST = 'FETCH_SHELTERS_REQUEST';
export const fetchSheltersRequest = () => ({
    type: FETCH_SHELTERS_REQUEST,
    loading: true
});

export const FETCH_SHELTERS_SUCCESS = 'FETCH_SHELTERS_SUCCESS';
export const fetchSheltersSuccess = (shelters, filterType, filterZip) => ({
    type: FETCH_SHELTERS_SUCCESS,
    loading: false,
    shelters,
    filterType,
    filterZip 
});

export const fetchSheltersData = (filterType, filterZip) => dispatch => {
  dispatch(fetchSheltersRequest());
  fetch('../../../api')
    .then(shelters => {
      return shelters.json();
    })
    .then(sheltersJson => {
      return dispatch(fetchSheltersSuccess(sheltersJson, filterType, filterZip));
    })
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const logInRequest = () => ({
    type: LOGIN_REQUEST,
    loading: true
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const logInSuccess = shelter => ({
    type: LOGIN_SUCCESS,
    loading: false,
    shelter 
});

export const fetchLogInData = (email, password) => dispatch => {
  dispatch(logInRequest());
  fetch('../../../api/login', {
    method: 'GET',
    headers: {
      'Authorization': 'Basic ' + btoa(email+':'+password),
      'Credentials': 'same-origin'
    }
  })
    .then(shelter => {
      return shelter.json();
    })
    .then(shelterJson => {
      console.log('log in success');
      return dispatch(logInSuccess(shelterJson));
    })
}

export const LOG_OUT ='LOG_OUT';
export const logOut = () => ({
  type: LOG_OUT
})
export const TOGGLE_ADD_PET = 'TOGGLE_ADD_PET';
export const toggleAddPet = () => ({
  type: TOGGLE_ADD_PET
});

export const SAVE_SETTINGS = 'SAVE_SETTINGS';
export const saveSettings = () => ({
  type: SAVE_SETTINGS
});

export const fetchAddNewAnimal = (id, newAnimal) => dispatch => {
  fetch(`../../../api/login/update/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(newAnimal)
  })
  .then(res => {
    console.log('PUT Success');
    return res.json(); 
  })
  .then(result => {
    console.log('dispatching new log in success');
    return dispatch(logInSuccess(result));
  });
}

export const deleteAnimal = (id, animalId) => dispatch => {
  fetch(`../../../api/login/update/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "DELETE",
    body: JSON.stringify({animalId})
  })
  .then(result => {
    // console.log('DELETE Success', result);
    // console.log('dispatching log in');   
    return result.json()
  })
  .then(jsonValue => {
    console.log('hello');
    console.log(jsonValue);
    return dispatch(logInSuccess(jsonValue));
  })
  .catch(err => {
    console.log(err);
  })
}