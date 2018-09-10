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
    const { item, traits } = this.props
    return (
      <Row className="container center-align">
        <h4>{item.company_name}</h4>
        <Row>
          {traits ? <List data={traits}/> : null}
        </Row>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loadClient,
}, dispatch)

const mapStateToProps = state => {
  return {
    item: state.mainReducer.item,
    traits: state.mainReducer.traits
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyView);
