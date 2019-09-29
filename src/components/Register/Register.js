import React, { Component } from 'react';
import './Register.css';

// use class because need state
class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      registerEmail:'',
      registerPassword:''
    }
  }

  onEmailChange = (event) => {
    this.setState({ registerEmail:event.target.value });
  }

  onPasswordChange = (event) => {
    this.setState({ registerPassword:event.target.value });
  }

  onSubmitRegister = () => {
    console.log(this.props.serverUrl+'register');

    // server address
    fetch(this.props.serverUrl+'register', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:this.state.registerEmail,
        password:this.state.registerPassword
      })
    })
      .then(response => response.json()) // need return for {}
      .then(user => {
        console.log('here');
        console.log(user);
        if (user.id) {
          this.props.onRouteChange('signIn', false);
        }
      })
  }

  render () {
    const { onRouteChange } = this.props;
    console.log('Register');

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
                  value="Register"
                  onClick={this.onSubmitRegister}
                />
              </div>
              <div className="lh-copy mt2">
                <p className="link dim black db pointer" onClick={() => onRouteChange('signIn', false)}>Back to Sign In</p>
              </div>
            </fieldset>
          </form>
        </main>
      </article>
    )
  }
}

export default Register;