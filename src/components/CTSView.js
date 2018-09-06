import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button, Icon } from 'react-materialize'
import List from './List'
import { changeCTSView } from '../actions'

class CTSView extends Component {
  state = {
    button1: 'Traits',
    button2: 'Surveys'
  }

  render() {
    let { CTSView, changeCTSView } = this.props
    return (
      <div>
        <Row className="container center-align">
            <h4 id="cts-header">{CTSView}</h4>
        </Row>
        <Row>
          <List/>
        </Row>
        <Row className="container center-align">
          <Button onClick={() => {
            changeCTSView(this.state.button1);
            this.setState({button1: CTSView})
          }}
          id="login-button"
          waves='light'>
            {this.state.button1}<Icon left>cloud</Icon>
          </Button>
          <Button onClick={() => {
            changeCTSView(this.state.button2);
            this.setState({button2: CTSView})
          }}
          id="login-button"
          waves='light'>
            {this.state.button2}<Icon left>cloud</Icon>
          </Button>
        </Row>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCTSView
}, dispatch)

const mapStateToProps = state => {
  return {
    CTSView: state.mainReducer.CTSView
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CTSView);
