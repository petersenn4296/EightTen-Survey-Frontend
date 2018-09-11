import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { Row } from 'react-materialize'

class TraitView extends Component {

  render() {
    const { item } = this.props
    return (
      <Row className="container center-align">
        Response: {item.response}
      </Row>
    )
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
// }, dispatch)

const mapStateToProps = state => {
  return {
    item: state.mainReducer.item,
  }
}

export default connect(
  mapStateToProps,
  null
)(TraitView);
