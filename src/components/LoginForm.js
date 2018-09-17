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
      <Col className="container login_box">
          <Col>
            <Input
              onChange={(e) => updateCredentials('email', e.target.value)}
              type="text"
              className='eightten_input'
              l={12}
              label="Email"
              required
            />
          </Col>
          <Col>
            <Input
              onChange={(e) => updateCredentials('password', e.target.value)}
              type="password"
              l={12}
              label="Password"
              required
            />
          </Col>
        <Col className="center-align">
          {login_error ? <span className="error-text">{login_error}</span> : null}
          <br></br>
          <Button
            className='eightten_button'
            onClick={() => login(email, password)}
            id="login-button">
            log in
            <Icon left>cloud</Icon>
          </Button>
          <Modal
            fixedFooter
            id="sign-up-modal"
            trigger={<Button
              className="eightten_button">
              <Icon
                left>person_add
              </Icon>SIGN UP
            </Button>}>
              <ClientIntakeForm/>
          </Modal>
        </Col>

      </Col>
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
