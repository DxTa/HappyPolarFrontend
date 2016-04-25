import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getExercise } from '../reducers/exercises'
import { browserHistory } from 'react-router'
import {
  Grid,
  Row,
  Col,
  Thumbnail,
  form,
  FormControls,
  Button,
  Input
} from 'react-bootstrap'
import { Endpoints } from '../constants/api'
import { fetchExercise } from '../actions'
// import Exercise from '../components/Exercise'
import CSSModules from 'react-css-modules'
import styles from './ExerciseContainer.css'

class ExerciseContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getState } = this.props;
    this.setState({
      // route components are rendered with useful information, like URL params
      exercise: getExercise(this.props.params.id, getState())
    })
  }

  componentWillMount() {
    const { fetchExercise } = this.props;
    fetchExercise(this.props.params.id);
  }

  render() {
    const {
      exercise
    } = this.props;

    const navigateViaRouter = (event) => {
      event.preventDefault()
      browserHistory.push(event.currentTarget.href)
    }

    return (
      <div>
        ALOHA
      </div>
    )
  }
}

ExerciseContainer.propTypes = {
  exercise: PropTypes.any,
  fetchExercise: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  {
    fetchExercise
  }
)(CSSModules(ExerciseContainer, styles))
