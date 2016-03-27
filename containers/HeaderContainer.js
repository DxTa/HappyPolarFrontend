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
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3" active>Active Item</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton>
    );

    return (
      <Grid id="header">
        <Row className="vertical-middle">
          <Col xs={6} ms={6} md={6}>
            Left Header
          </Col>
          <Col xs={6} ms={6} md={6}>
            <div className="rightHeader">
              {
                user.email ?
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
  user: PropTypes.any
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
)(HeaderContainer)
