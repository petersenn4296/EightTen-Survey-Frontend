import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button, Icon } from 'react-materialize'
import { navigate, loadSurvey } from '../actions'
import List from './List'

class SpecificQuestionView extends Component {

  async componentDidMount() {
    this.props.loadSurvey(this.props.item.id)
  }

  render() {
    const { navigate, item, loadSurvey, survey } = this.props
    return (
      <Row className="container">
        {item.question} {item.type}
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  navigate,
  loadSurvey
}, dispatch)

const mapStateToProps = state => {
  return {
    item: state.mainReducer.item
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecificQuestionView);
