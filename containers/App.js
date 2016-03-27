import '../static/app.scss'

import React, { Component, PropTypes } from 'react'
import HeaderContainer from './HeaderContainer'
import FooterContainer from './FooterContainer'

export default class App extends Component {

  render() {
    return (
      <div>
        <HeaderContainer />
        <div id="content">
          {this.props.children}
        </div>
        <FooterContainer />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.any
}
