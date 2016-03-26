import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import { facebookCallback } from '../actions'
import { getUser } from '../reducers/user'

class HeaderContainer extends Component {

  render() {
    const {
      user
    } = this.props;

    return (
      <Login loginCallback={ (response) => this.props.facebookCallback(response) } />
    )
  }
}

HeaderContainer.propTypes = {
  facebookCallback: PropTypes.func.isRequired,
  user: PropTypes.any
}

const mapStateToProps = (state) => {
  return {
    user: getUser(state)
  }
}

export default connect(
  mapStateToProps,
  {
    facebookCallback
  }
)(HeaderContainer)
