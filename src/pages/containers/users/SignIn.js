import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

class SignIn extends Component {
  handleSuccess = (response) => {
    let token = response.Zi

    axios({
      method: 'post',
      url: this.props.baseUrl+'/auth/request',
      headers: { 'Content-Type': 'application/json' },
      params: { id_token: token.id_token }
    }).then(jsonresponse => {
      this.props.dispatch({ type: 'SET_AUTH', payload: jsonresponse.headers})
      this.props.history.push('/')
    });
  }

  handleFailure = () => {
    alert('User can not be authenticated');
  }

  render() {
    return (
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={this.handleSuccess}
        onFailure={this.handleFailure}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    baseUrl: state.data.baseUrl,
  }
}

export default withRouter(connect(mapStateToProps)(SignIn));