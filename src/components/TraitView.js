import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button, Icon } from 'react-materialize'
import { navigate, loadClient } from '../actions'

class TraitView extends Component {

  async componentDidMount() {
    this.props.loadClient(this.props.item.id)
  }

  render() {
    const { navigate, item } = this.props
    return (
      <Row className="container">
        hello {item.company_name}
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  navigate,
  loadClient
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
)(TraitView);
