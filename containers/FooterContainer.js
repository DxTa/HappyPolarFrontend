import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import { getUser } from '../reducers/user'

class FooterContainer extends Component {

  render() {
    const {
      user
    } = this.props;

    return (
      <div id="footer">
        <h2>Footer here</h2>
      </div>
    )
  }
}

FooterContainer.propTypes = {
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
)(FooterContainer)
