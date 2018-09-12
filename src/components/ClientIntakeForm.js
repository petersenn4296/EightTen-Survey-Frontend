import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button, Icon } from 'react-materialize'
import { updateCredentials, newUser } from '../actions'
import '../App.css'

class ClientIntakeForm extends Component {

  render() {

    const { updateCredentials, newUser, email, password, first_name, last_name, phone, title, company_name, size, location } = this.props

    return (
      <Row className="container">
        <Input s={12} onChange={(e) => updateCredentials(e.target.name, e.target.value)} name="first_name" type="text" label="First Name" required />
        <Input s={12} onChange={(e) => updateCredentials(e.target.name, e.target.value)} name="last_name" type="text" label="Last Name" required />
        <Input s={12} onChange={(e) => updateCredentials(e.target.name, e.target.value)} name="title" type="text" label="Title" required />
        <Input s={12} onChange={(e) => updateCredentials(e.target.name, e.target.value)} name="company_name" type="text" label="Company Name" required />
        <Input s={12} onChange={(e) => updateCredentials(e.target.name, e.target.value)} name="size" type="number" label="Company Size" required />
        <Input s={12} onChange={(e) => updateCredentials(e.target.name, e.target.value)} name="location" type="text" label="Location" required />
        <Input s={12} onChange={(e) => updateCredentials(e.target.name, e.target.value)} name="phone" type="tel" label="Phone" required />
          <Input s={12} onChange={(e) => updateCredentials(e.target.name, e.target.value)} name="email" type="email" label="Email" required />
          <Input s={12} onChange={(e) => updateCredentials(e.target.name, e.target.value)} name="password" type="password" label="Password" required />
          <div className="center-align">
            <Button
              onClick={() => newUser(email, password, first_name, last_name, phone, title, company_name, size, location)}
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

const mapDispatchToProps = dispatch => bindActionCreators({
  updateCredentials,
  newUser
}, dispatch)

const mapStateToProps = state => {
  return {
    email: state.mainReducer.email,
    password: state.mainReducer.password,
    first_name: state.mainReducer.first_name,
    last_name: state.mainReducer.last_name,
    phone: state.mainReducer.phone,
    title: state.mainReducer.title,
    company_name: state.mainReducer.company_name,
    size: state.mainReducer.size,
    location: state.mainReducer.location
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientIntakeForm);
