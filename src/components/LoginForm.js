import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button, Icon, Modal } from 'react-materialize'
import { updateCredentials, login } from '../actions'
import ClientIntakeForm from './ClientIntakeForm'
import '../App.css'

class LoginForm extends Component {

  render() {

    const { updateCredentials, email, password, login, login_error } = this.props

    return (
      <Row className="container">

        <Input
          onChange={(e) => updateCredentials('email', e.target.value)}
          type="text"
          className='eightten_input'
          s={12}
          label="Email"
          required
        />

        <Input
          onChange={(e) => updateCredentials('password', e.target.value)}
          type="password"
          s={12}
          label="Password"
          required
        />

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
            trigger={<Button className="eightten_button"><Icon left>person_add</Icon>SIGN UP</Button>}>
              <ClientIntakeForm/>
          </Modal>
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
    login_error: state.mainReducer.login_error
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
