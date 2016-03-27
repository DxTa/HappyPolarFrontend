import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import { getUser } from '../reducers/user'

class ProfileContainer extends Component {

  render() {
    const {
      user
    } = this.props;

    return (
      <h2>ALOHA</h2>
    )
  }
}

ProfileContainer.propTypes = {
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
  }
)(ProfileContainer)
