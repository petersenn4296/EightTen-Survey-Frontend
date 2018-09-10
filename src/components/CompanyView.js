import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row } from 'react-materialize'
import { loadClient } from '../actions'
import List from './List'

class CompanyView extends Component {

  async componentDidMount() {
    this.props.loadClient(this.props.item.id)
  }

  render() {
    const { item, client, traits } = this.props
    console.log(client);
    console.log(traits);
    return (
      <Row className="container">
        hello {item.company_name}
        <Row>
          {traits ? <List data={traits}/> : null}
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
    item: state.mainReducer.item,
    client: state.mainReducer.client,
    traits: state.mainReducer.traits
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyView);
