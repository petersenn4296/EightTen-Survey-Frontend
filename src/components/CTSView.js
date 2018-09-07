import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button, Icon } from 'react-materialize'
import List from './List'
import { changeCTSView, loadSurveys, loadTraits, loadClients } from '../actions'

class CTSView extends Component {
  state = {
    button1: 'Traits',
    button2: 'Surveys'
  }

  async componentDidMount() {
    this.props.loadClients()
    this.props.loadTraits()
    this.props.loadSurveys()
  }

  render() {
    let { CTSView, changeCTSView, clients, traits, surveys } = this.props
    let data = this.props[CTSView.toLowerCase()]
    return (
      <div>
        <Row className="container center-align">
            <h4 id="cts-header">{CTSView}</h4>
        </Row>
        <Row>
          {data ? <List data={data}/> : null}
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
  changeCTSView,
  loadTraits,
  loadClients,
  loadSurveys
}, dispatch)

const mapStateToProps = state => {
  return {
    CTSView: state.mainReducer.CTSView,
    traits: state.mainReducer.traits,
    clients: state.mainReducer.clients,
    surveys: state.mainReducer.surveys
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CTSView);
