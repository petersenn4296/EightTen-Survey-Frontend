import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button, Icon } from 'react-materialize'
import { navigate, updateCredentials, login } from '../actions'

class LoginForm extends Component {

  render() {

    const { navigate, updateCredentials, email, password, login } = this.props
    return (
      <Row className="container">
          <Input onChange={(e) => updateCredentials('email', e.target.value)} placeholder="you@address.com" s={12} label="Email" required />
          <Input onChange={(e) => updateCredentials('password', e.target.value)} s={12} placeholder="Password..." label="Password" required />
          <div className="center-align">
              <Button onClick={() => {
                login(email, password)
                navigate('CTSView')
              }}
              id="login-button"
              waves='light'>
                login<Icon left>cloud</Icon>
              </Button>
          </div>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  navigate,
  updateCredentials,
  login
}, dispatch)

const mapStateToProps = state => {
  return {
    view: state.mainReducer.view,
    email: state.mainReducer.email,
    password: state.mainReducer.password
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
