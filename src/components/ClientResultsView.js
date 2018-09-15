import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row } from 'react-materialize'
import AccordionView from './AccordionView'
import { loadClient } from '../actions'

class ClientResultsView extends Component {

  async componentDidMount() {
    this.props.loadClient(this.props.client_id)
  }

  render() {
    const { client_id, client, employee_impact, community_impact, talent_lifecycle } = this.props
    console.log('1',employee_impact);
    console.log('2',community_impact);
    console.log('3',talent_lifecycle);
    return (
      <Row className="container center-align">
        <Row>
          Your Results Page
        </Row>
        <Row>
          You scored 
        </Row>
        <Row>
          <h4>{client_id}</h4>
        </Row>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loadClient
}, dispatch)

const mapStateToProps = state => {
  return {
    client_id: state.mainReducer.client_id,
    client: state.mainReducer.client,
    employee_impact: state.mainReducer.employee_impact,
    community_impact: state.mainReducer.community_impact,
    talent_lifecycle: state.mainReducer.talent_lifecycle
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientResultsView);
