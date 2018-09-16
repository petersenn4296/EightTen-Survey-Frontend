import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button, Icon, Modal, Col } from 'react-materialize'
import { updateCredentials, login } from '../actions'
import ClientIntakeForm from './ClientIntakeForm'
import '../App.css'

class LoginForm extends Component {

  render() {

    const { updateCredentials, email, password, login, login_error } = this.props

    return (
      <div className="container login_box" s={10} m={8} l={6} >
          <Col offset="l12 m12 s12" l={12} m={12} s={12}>
            <Input
              onChange={(e) => updateCredentials('email', e.target.value)}
              type="text"
              className='eightten_input'
              l={12}
              label="Email"
              required
            />
          </Col>
          <Col offset="l12 m12 s12" l={12} m={12} s={12}>
            <Input
              onChange={(e) => updateCredentials('password', e.target.value)}
              type="password"
              l={12}
              label="Password"
              required
            />
          </Col>

        <div className="center-align">
          {login_error ? <span className="error-text">{login_error}</span> : null}
        </div>
        <br></br>
        <div className="center-align">
          <Button
            className='eightten_button'
            onClick={() => login(email, password)}
            id="login-button"
            waves='light'
          >
            log in
            <Icon left>cloud</Icon>
          </Button>
          <br></br>
          <br></br>
          <Modal
            fixedFooter
            id="sign-up-modal"
            trigger={<Button className="eightten_button"><Icon left>person_add</Icon>SIGN UP</Button>}>
              <ClientIntakeForm/>
          </Modal>
        </div>

      </div>
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
    login_error: state.mainReducer.login_error
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
