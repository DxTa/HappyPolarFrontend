import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getExercises } from '../reducers/exercises'
import { getSessions } from '../reducers/sessions'
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
import { fetchExercises, fetchSessions } from '../actions'
import Exercise from '../components/Exercise'
import CSSModules from 'react-css-modules'
import styles from './ExercisesContainer.css'
import { Bar } from 'react-chartjs'

class ExercisesContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { fetchExercises, fetchSessions } = this.props;
    fetchExercises();
    fetchSessions();
  }

  render() {
    const {
      user,
      exercises,
      sessions
    } = this.props;

    const navigateViaRouter = (event) => {
      event.preventDefault()
      browserHistory.push(event.currentTarget.href)
    }

    const jdata = {}

    Array.from(sessions, (session) => {
      const d = new Date(session.start_time).format("dd.mm.yyyy")
      if (!(d in jdata)) {
        jdata[d] = 0
      }
      jdata[d] += session.calories
    })

    const labels = Object.keys(jdata)
    const data = Object.values(jdata)
    const chartData = {
      labels,
      datasets: [
        {
          data
        }
      ]
    }
    const barChart = (
      <Bar data={chartData}
      options={
        { responsive: true }
      }
      />
    )

    const exercisesElement = []
    exercises.forEach((exercise) => {
      exercisesElement.push(
        // <a href={`/exercises/${exercise._id}/sessions`} onClick={navigateViaRouter}>
        <Exercise
        key={exercise._id}
        id={exercise._id}
        name={exercise.name}
        description={exercise.description}
        image={exercise.image}
        />
        // </a>
      )
    })

    return (
      <div>
        <h2>Exercises</h2>
        <hr />
        { data.length == 0 ? "" : barChart }
        <div styleName="wrapper">
          <div styleName="columns">
            { exercisesElement }
          </div>
        </div>
      </div>

    )
  }
}

ExercisesContainer.propTypes = {
  user: PropTypes.any,
  exercises: PropTypes.any,
  sessions: PropTypes.any,
  fetchExercises: PropTypes.func.isRequired,
  fetchSessions: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    exercises: getExercises(state),
    sessions: getSessions(state)
  }
}

export default connect(
  mapStateToProps,
  {
    fetchExercises,
    fetchSessions
  }
)(CSSModules(ExercisesContainer, styles))
