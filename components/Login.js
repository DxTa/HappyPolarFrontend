import React, { Component, PropTypes } from 'react';
import FacebookLogin from 'react-facebook-login';

class Login extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const {
      loginCallback,
      user
    } = this.props;

    const responseFacebook = (response) => {
      loginCallback(response);
    }

    return (
      <FacebookLogin
      appId="495899663951920"
      autoLoad={true}
      scope="email, user_friends, public_profile"
      callback={responseFacebook}
      cssClass="my-facebook-button-class"
      icon="fa-facebook" />
    )
  }
}

Login.propTypes = {
  loginCallback: PropTypes.func,
  user: PropTypes.any
}

export default Login;
