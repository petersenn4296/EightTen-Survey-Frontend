import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button, Icon } from 'react-materialize'
import { navigate } from '../actions'

class TraitView extends Component {

  render() {
    const { navigate, item } = this.props
    return (
      <Row className="container center-align">
        Response: {item.response}
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  navigate
}, dispatch)

const mapStateToProps = state => {
  return {
    item: state.mainReducer.item,
    // trait: state.mainReducer.trait
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TraitView);
