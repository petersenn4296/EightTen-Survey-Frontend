import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button, Icon } from 'react-materialize'
// import { navigate, updateCredentials, login } from '../actions'
import '../App.css'

class ClientIntakeForm extends Component {

  render() {

    // const { updateCredentials, email, password, login } = this.props
    return (
      <Row className="container">
          <Input s={12} label="Email" required />
          <Input s={12} label="Password" required />
          <Input s={12} label="First Name" required />
          <Input s={12} label="Last Name" required />
          <Input s={12} label="Phone" required />
          <Input s={12} label="Title" required />
          <Input s={12} label="Company Name" required />
          <Input s={12} label="Size" required />
          <Input s={12} label="Location" required />
          <div className="center-align">
            <Button
              className='eightten_button'
              id="login-button"
              waves='light'>
              Create Account<Icon left>cloud</Icon>
            </Button>
          </div>
      </Row>
    )
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
// }, dispatch)

// const mapStateToProps = state => {
//   return {
//     view: state.mainReducer.view,
//     email: state.mainReducer.email,
//     password: state.mainReducer.password,
//   }
// }

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
  null,
  null
)(ClientIntakeForm);
