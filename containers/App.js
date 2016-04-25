import React, { Component, PropTypes } from 'react'
import HeaderContainer from './HeaderContainer'
import FooterContainer from './FooterContainer'
import CSSModules from 'react-css-modules'
import styles from './App.css'

class App extends Component {


  render() {
    return (
      <div styleName='root'>
        <HeaderContainer />
        <div styleName='content' id="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.any
}

export default CSSModules(App, styles)
