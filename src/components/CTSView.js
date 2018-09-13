import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Button, Icon } from 'react-materialize'
import List from './List'
import { changeCTSView, loadSurveys, loadTraits, loadClients } from '../actions'

class CTSView extends Component {

  async componentDidMount() {
    this.props.loadClients()
    this.props.loadTraits()
    this.props.loadSurveys()
  }

  render() {
    let { CTSView, changeCTSView, button1, button2, is_admin } = this.props
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
          <Button
            className='eightten_button'
            onClick={() => {
            changeCTSView(button1)
          }}
          waves='light'>
            {button1}<Icon left>cloud</Icon>
          </Button>

          <Button
            className='eightten_button'
            onClick={() => {
            changeCTSView(button2)
          }}
          waves='light'>
            {button2}<Icon left>cloud</Icon>
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
    surveys: state.mainReducer.surveys,
    button1: state.mainReducer.button1,
    button2: state.mainReducer.button2,
    is_admin: state.mainReducer.is_admin
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CTSView);
