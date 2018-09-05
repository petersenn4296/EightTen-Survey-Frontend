import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button, Icon } from 'react-materialize'

class LoginForm extends Component {
  constructor(props) {
      super(props)
      this.state = {
      }
    }

  render() {
    return (
      <Row className="container">
          <Input placeholder="you@address.com" s={12} label="Email" required />
          <Input s={12} placeholder="Password..." label="Password" required />
          <div className="center-align">
              <Button id="login-button" waves='light'>login<Icon left>cloud</Icon></Button>
          </div>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

const mapStateToProps = state => {
  // const props = {
  //   toggle: state.post.toggle,
  //   posts: state.post.posts,
  //   comments: state.comments
  // }
  // return props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
