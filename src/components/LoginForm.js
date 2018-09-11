import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button, Icon } from 'react-materialize'
import { navigate } from '../actions'

class LoginForm extends Component {
  render() {
    const {navigate} = this.props
    return (
      <Row className="container">
          <Input placeholder="you@address.com" s={12} label="Email" required />
          <Input s={12} placeholder="Password..." label="Password" required />
          <div className="center-align">
              <Button onClick={() => {
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
  navigate
}, dispatch)

const mapStateToProps = state => {
  return {
    view: state.mainReducer.view
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
