import React from 'react';
import Router from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';
import 'whatwg-fetch';

var LoginPage = React.createClass({

  getInitialState: function(){
    return {
      loginID: '',
      password: '',
      isSubmitted: false
    };
  },

  mixins: [Router.Navigation],

  render: function(){
  
    return <div className="col-md-4 col-md-offset-4">

      <div className="text-center">
        <h1 className="login-brand-text">SB Admin React</h1>
      </div>

      <Panel header={<h3>Please Sign In</h3>} className="login-panel">
        <form role="form" onSubmit={this.handleLogin}>
          <fieldset>
            <div className="form-group">
              <Input onChange={this.setLoginID} className="form-control" placeholder="Email" ref="loginID" type="text" autofocus="" name="name" />
            </div>
            <div className="form-group">
              <Input onChange={this.setPassword} className="form-control" placeholder="Password" ref="password" type="password" name="password" />
            </div>
            <Input type="checkbox" label="Remember Me" />
            <Button type="submit" bsSize="large" bsStyle="success" block>Login</Button>
            <p>{this.state.loginError}</p>
          </fieldset>
        </form>
      </Panel>
    </div>
  },

  setLoginID: function(e) {

    this.setState({
      loginID: e.target.value,
      loginError: ''
    });

  },

  setPassword: function(e) {

    this.setState({
      password: e.target.value,
      loginError: ''
    });

  },

  handleLogin: function(e){
    console.log(e);
    console.log(this.state.loginID + '_' + this.state.password);

    let vm = this;
    fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.loginID,
        password: this.state.password})
    }).then(function(response) {
      if(!response.ok) {
        response.json().then(function(data) {
          console.log('parse message', data);
          vm.setState({loginError: data[0]});
        });
      } else {
        response.json().then(function(json) {
          console.log('parsed json', json);
          vm.transitionTo('dashboard');
        });
      }
    }).catch(function(ex) {
      console.log('parsing failed', ex);
    });
    return false;
  }
});

export default LoginPage;