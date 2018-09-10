import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row } from 'react-materialize'
import AccordionView from './AccordionView'

class CompanyTraitView extends Component {

  render() {
    const { item, client } = this.props
    return (
      <Row className="container center-align">
        <h4>{item.company_name}</h4>
        <Row>
          {client ? <AccordionView data={client}/> : null}
        </Row>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

const mapStateToProps = state => {
  return {
    item: state.mainReducer.item,
    client: state.mainReducer.client
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyTraitView);
