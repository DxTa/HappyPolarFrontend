import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import HomePageContainer from './containers/HomePageContainer'
import ProfileContainer from './containers/ProfileContainer'
import ExercisesContainer from './containers/ExercisesContainer'
import ExerciseContainer from './containers/ExerciseContainer'

export default (
  <Route path="/" component={App}>
    <Route path="/home" component={HomePageContainer} />
    <Route path="/profile" component={ProfileContainer} />
    <Route path="/exercises" component={ExercisesContainer} />
    <Route path="/exercises/:id/sessions" component={ExerciseContainer} />
  </Route>
)
