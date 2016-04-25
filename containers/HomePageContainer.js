import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './HomePageContainer.css'

class HomePageContainer extends Component {

  render() {
    const {
    } = this.props;

    const navigateViaRouter = (event) => {
      event.preventDefault()
      browserHistory.push(event.currentTarget.href)
    }

    return (
      <div>
        <h2></h2>
      </div>
    )
  }
}

ExercisesContainer.propTypes = {
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
