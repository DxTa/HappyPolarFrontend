import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './HomePage.css'

class HomePageContainer extends Component {

  render() {
    const {
    } = this.props;

    const navigateViaRouter = (event) => {
      event.preventDefault()
      browserHistory.push(event.currentTarget.href)
    }

    return (
      <div styleName='hero'>
        <div styleName="control-box-wrapper">
          <div styleName="control-box" className="container">
            <h1 styleName='slogan' className="text-center">Join Happy Polar community</h1>
            <div className="container">
              <div className="row">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

HomePageContainer.propTypes = {
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  {
  }
)(CSSModules(HomePageContainer, styles))
