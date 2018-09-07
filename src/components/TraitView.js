import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button, Icon } from 'react-materialize'
import { navigate, loadTrait } from '../actions'

class TraitView extends Component {

  async componentDidMount() {
    this.props.loadTrait(this.props.item.id)
  }

  render() {
    const { navigate, item } = this.props
    return (
      <Row className="container">
        hello trait view
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  navigate,
  loadTrait
}, dispatch)

const mapStateToProps = state => {
  return {
    item: state.mainReducer.item,
    trait: state.mainReducer.trait
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TraitView);
