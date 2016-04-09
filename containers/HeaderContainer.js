import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import { facebookCallback } from '../actions'
import { getUser } from '../reducers/user'
import { Link } from 'react-router'
import {
  DropdownButton,
  MenuItem,
  Grid,
  Row,
  Col } from 'react-bootstrap'
import CSSModules from 'react-css-modules'
import styles from './Header.css'

class HeaderContainer extends Component {

  render() {
    const {
      user
    } = this.props;

    const renderDropdownButton = (
      <DropdownButton bsStyle="default" pullRight title={user.name.split(' ')[0]} key={user.id} id={`user-profile-dropdown`}>
        <MenuItem eventKey="1">
          <Link to="/profile">Profile</Link>
        </MenuItem>
      </DropdownButton>
    );

    return (
      <Grid styleName="header" id="header">
        <Row styleName="vertical-middle" className="vertical-middle">
          <Col xs={6} ms={6} md={6}>
            Left Header
          </Col>
          <Col xs={6} ms={6} md={6}>
            <div styleName="rightHeader" className="rightHeader">
              {
                user.facebook ?
                  renderDropdownButton :
                  <Login loginCallback={ (response) => this.props.facebookCallback(response) } />
              }
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

HeaderContainer.propTypes = {
  facebookCallback: PropTypes.func.isRequired,
  user: PropTypes.any,
  styles: PropTypes.any
}

const mapStateToProps = (state) => {
  return {
    user: getUser(state.user)
  }
}

export default connect(
  mapStateToProps,
  {
    facebookCallback
  }
)(CSSModules(HeaderContainer, styles))
