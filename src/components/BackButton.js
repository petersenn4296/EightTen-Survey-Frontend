import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { navigate, back } from '../actions'
import { Row, Button } from 'react-materialize'


class BackButton extends Component {
  render() {
    const { navigate, back } = this.props
    return (
      <Row className="container">
        <Button onClick={() => {
          back()
        }}
        id="login-button"
        waves='light'>
          Back
        </Button>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  navigate,
  back
}, dispatch)

const mapStateToProps = state => {
  return {
    view: state.mainReducer.view
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackButton);
