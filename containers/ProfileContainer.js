import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import { getUser } from '../reducers/user'
import { updateProfile } from '../actions'
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

class ProfileContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      draft: {}
    }
  }

  // componentDidMount() {
  // }

  // handleChange() {
    // console.log("AAA",this.refs)
  // }

  render() {
    const {
      user,
      updateProfile
    } = this.props;

    const navigateViaRouter = (event) => {
      event.preventDefault()
      browserHistory.push(event.currentTarget.href)
    }

    const handleChange = () => {
      this.setState({
        draft: {
          _id: user._id,
          age: this.refs.age.getValue(),
          height: this.refs.height.getValue(),
          weight: this.refs.weight.getValue()
        }
      })
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

                <Input type="number"
                  label="Age"
                  labelClassName="col-xs-2"
                  wrapperClassName="col-xs-10"
                  value={this.state.draft.age || user.age}
                  placeholder="Enter your Height"
                  ref="age"
                  onChange={handleChange}
                />

                <Input type="text"
                  hasFeedback
                  label="Height (cm)"
                  labelClassName="col-xs-2"
                  wrapperClassName="col-xs-10"
                  value={this.state.draft.height || user.height}
                  placeholder="Enter your Height"
                  ref="height"
                  onChange={handleChange}
                />

                <Input type="number"
                  label="Weight (kg)"
                  labelClassName="col-xs-2"
                  wrapperClassName="col-xs-10"
                  value={this.state.draft.weight || user.weight}
                  placeholder="Enter your weight"
                  ref="weight"
                  onChange={handleChange}
                />

              </form>

              <Button
                bsStyle="primary"
                disabled={user.isLoading}
                onClick={!user.isLoading ? () => {
                  updateProfile(this.state.draft)
                } : null}>
                {user.isLoading ? 'Loading...' : 'Save'}
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

ProfileContainer.propTypes = {
  user: PropTypes.any,
  updateProfile: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    user: getUser(state.user)
  }
}

export default connect(
  mapStateToProps,
  {
    updateProfile
  }
)(ProfileContainer)
