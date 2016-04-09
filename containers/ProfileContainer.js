import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import { getUser } from '../reducers/user'
import { browserHistory } from 'react-router'
import {
  Grid,
  Row,
  Col,
  Thumbnail,
  form,
  FormControls,
  ButtonInput
} from 'react-bootstrap'

class ProfileContainer extends Component {

  componentDidMount() {
  }

  render() {
    const {
      user
    } = this.props;

    const navigateViaRouter = (event) => {
      event.preventDefault()
      browserHistory.push(event.currentTarget.href)
    }

    return (
      <div>
        <Grid>
          <h2>Profile</h2>
          <hr />
          <Row>
            <Col xs={4} md={3}>
              <Thumbnail href="/profile" src="http://images.indianexpress.com/2015/03/emma-watson759.jpg"
                onClick={navigateViaRouter}/>
            </Col>
            <Col xs={8} md={9}>
              <form className="form-horizontal">
                <FormControls.Static label="Name" labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={user.name} />
                <FormControls.Static label="Email" labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={user.facebook.email} />
                <FormControls.Static label="Age" labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={user.age} />
                <FormControls.Static label="Height" labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={user.height} />
                <FormControls.Static label="Weight" labelClassName="col-xs-2" wrapperClassName="col-xs-10" value={user.weight} />

                <ButtonInput type="reset" value="Reset Button" />
                <ButtonInput type="submit" value="Submit Button" />

              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

ProfileContainer.propTypes = {
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
  }
)(ProfileContainer)
