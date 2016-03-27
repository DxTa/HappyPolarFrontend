import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import ProfileContainer from './containers/ProfileContainer'

export default (
  <Route path="/" component={App}>
    <Route path="/profile" component={ProfileContainer} />
  </Route>
)
