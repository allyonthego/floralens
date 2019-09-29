import React, { Component } from 'react';
import './SignIn.css';

// use class because need state
class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signInEmail:'',
      signInPassword:''
    }
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail:event.target.value });
  }

  onPasswordChange = (event) => {
    this.setState({ signInPassword:event.target.value });
  }

  onSubmitSignIn = () => {

    // server address
    fetch(this.props.serverUrl+'signin', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:this.state.signInEmail,
        password:this.state.signInPassword
      })
    })
      .then(response => response.json()) // need return for {}
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home', true);
        }
      })
  }

  render() {
    console.log('SignIn');
    const { onRouteChange } = this.props;

    // from tachyons productcard, signin form
    return (
      <article className="ba dark-gray b--black mv2 w-100 w-50-m w-25-l mw5 center f5">
        <main className="black-80">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <div className="mt2">
                <label className="db fw3 lh-copy" htmlFor="email-address">Email</label>
                <input 
                  className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-75"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange} />
              </div>
              <div className="mt2">
                <label className="db fw3 lh-copy" htmlFor="password">Password</label>
                <input 
                  className="b pa1 input-reset ba bg-transparent hover-bg-black hover-white w-75"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange} />
              </div>
              <div className="mt3">
                <input 
                  className="ph2 pv1 input-reset ba b--black bg-transparent grow pointer dib" 
                  type="button"
                  value="Sign in"
                  onClick={this.onSubmitSignIn} 
                />
              </div>
              <div className="lh-copy mt2">
                <p className="link dim black db pointer" onClick={() => onRouteChange('register', false)}>Go to Register</p>
              </div>
            </fieldset>
          </form>
        </main>
      </article>
    );
  }
}

export default SignIn;