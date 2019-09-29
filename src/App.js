import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import ImageForm from './components/ImageForm/ImageForm.js';
import Navigation from './components/Navigation/Navigation.js';
import Rank from './components/Rank/Rank.js';
import Register from './components/Register/Register.js';
import Result from './components/Result/Result.js'
import SignIn from './components/SignIn/SignIn.js';

// reset website without reload
const blankState = {
  imageUrl: '',
  input: '',
  isSignedIn: false,
  labels:[],
  route: 'home',
  user: {
    email:'',
    id:'',
    entries: -1,
    joined:'',
  }    
};

// need cors proxy to deploy properly https://cors-anywhere.herokuapp.com/
const serverUrl = 'https://floralens-cors.herokuapp.com/https://floralens-api.herokuapp.com/';

class App extends Component {
  constructor() {
    super();
    this.state = blankState;
  }

  //calculateFaceLocation
  // showFaceBox

  loadUser = (data) => {
    console.log('loadUser');
    this.setState({user: {
      id:data.id,
      name:data.name,
      email:data.email,
      entries:data.entries,
      joined:data.joined
    }})
  }

  onPictureSubmit = () => {
    console.log('onPictureSubmit');

    // make server request to increment entries if user is logged in
    if (this.state.user.id) {
      fetch(serverUrl+'image', {
        method:'PUT',
        headers:{'Content-Type':'application/json'}, // MISSPELLING HEADERS AS HEADER RETURNS 400 ERROR
        body:JSON.stringify({
          id:this.state.user.id
        })
      })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, { entries:count }));
        })
        .catch(err => console.log('Error getting entries.'))
    }

    // make server request to label image
    this.setState({ imageUrl: this.state.input }, () => {
      fetch(serverUrl+'imageLabels', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          imageUrl:this.state.imageUrl
        })
      })
        .then(response => response.json())
        .then(labels => this.setState(Object.assign(this.state.labels, labels)))
        .catch(err => console.log('Error getting image from link.'))
    });

  }

  onInputChange = (event) => {
    console.log('onInputChange');
    this.setState({ input: event.target.value });
  }

  onRouteChange = (route, changeSignedIn) => {
    console.log('onRouteChange');
    this.setState({ route:route });
    this.setState({ imageUrl:'', input:'', labels:[] });

    if (changeSignedIn) {
      this.setState({ isSignedIn:!this.state.isSignedIn }, () => {
        // is async, need to put into callback func
        if (!this.state.isSignedIn) {
          this.setState(blankState);
        }
      });
    }
    
  }

  render() {
    return (
      <div className='App'>
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} route={this.state.route}/>
        { this.state.route === 'home' // can't use if-else in jsx return      
          ? <div>
              <Rank entries={this.state.user.entries}/>
              <ImageForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit}/>
              <Result imageUrl={this.state.imageUrl} labels={this.state.labels}/>
            </div> 
          : (
              this.state.route === 'signIn'
              ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} serverUrl={serverUrl}/>
              : <Register onRouteChange={this.onRouteChange} serverUrl={serverUrl}/>
            )        
        } 
      </div>
    );
  }
}

export default App;