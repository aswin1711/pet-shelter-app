import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './components/header';
import Search from './components/search';
import RegisterShelter from './components/registerShelter'
import ShelterSignUp from './components/shelterSignUp';
import ShelterLogIn from './components/shelterLogIn';
import ShelterDashboard from './components/dashboard';
import PetProfileFull from './components/petProfileFull';
import Footer from './components/footer';
import Home from './components/home';
import Settings from './components/settings';

class App extends Component {

  handleLogIn(hasAccount) {
    console.log(this.props.logIn.loggedInShelter);
    if (this.props.logIn.loggedInShelter) {
      return <Redirect to={'/shelters/dashboard'} />;
    }
    else if (hasAccount) {
      return <ShelterLogIn />;
    }
    else {
      return <ShelterSignUp />;
    }
  }

  handleDashboard() {
    if (this.props.logIn.loggedInShelter) {
      return <ShelterDashboard />;
    }
    else {
       return <Redirect to={'/'} />;
    }
  }

  handleFullProfile(context) {
    if (this.props.shelters.length > 0) {
      return <PetProfileFull id={context.match.params.id}/>;
    }
    else {
      return <Redirect to={'/'} />;
    }
  }

  render() {
    return (
      <Router>
        <div className='flexbox'>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/shelters" component={RegisterShelter} />
          <Route exact path="/shelters/signup" component={() => this.handleLogIn(false)} />
          <Route exact path="/shelters/dashboard" component={() => this.handleDashboard()} />
          <Route exact path="/shelters/login" component={() => this.handleLogIn(true)} />
          <Route exact path="/search/:id" component={(x) => this.handleFullProfile(x)} />
          <Route exact path="/shelters/dashboard/settings" component={Settings} />
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  shelters: state.shelters.data,
  logIn: state.logIn
});

export default connect(mapStateToProps)(App);
