import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import { getUser } from '../reducers/user'
import CSSModules from 'react-css-modules'
import styles from './Footer.css'

class FooterContainer extends Component {

  render() {
    const {
      user
    } = this.props;

    return (
      <div styleName="footer" id="footer">
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
)(CSSModules(FooterContainer, styles))
