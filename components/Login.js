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

    return (
      <FacebookLogin
      appId="495899663951920"
      autoLoad={true}
      callback={loginCallback} />
    )
  }
}

Login.propTypes = {
  loginCallback: PropTypes.func,
  user: PropTypes.any
}

Login.defaultProps = {
  loginCallback: responseFacebook
}

const responseFacebook = (response) => {
  console.log(response);
}

export default Login;
