import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button, Icon } from 'react-materialize'
import { navigate, updateCredentials, login } from '../actions'
import '../App.css'

class LoginForm extends Component {

  render() {

    const { updateCredentials, email, password, login } = this.props
    return (
      <Row className="container">

          <Input type='text' className='eightten_input' onChange={(e) => updateCredentials('email', e.target.value)} s={12} label="Email" required />

          <Input onChange={(e) => updateCredentials('password', e.target.value)} s={12} label="Password" required />

          <div className="center-align">
              <Button
                className='eightten_button'
                onClick={() => {
                login(email, password)
              }}
              id="login-button"
              waves='light'>
                login
                <Icon left>cloud</Icon>
              </Button>
          </div>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateCredentials,
  login
}, dispatch)

const mapStateToProps = state => {
  return {
    view: state.mainReducer.view,
    email: state.mainReducer.email,
    password: state.mainReducer.password,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
