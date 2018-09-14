import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Button } from 'react-materialize'
import { initializeQuestions } from '../actions'
import '../App.css'

class SurveyQuestionView extends Component {

  componentDidMount() {
    this.props.initializeQuestions()
  }

  render() {
    const { newSurveyQuestions, client_id, initializeQuestions} = this.props
    console.log(newSurveyQuestions);
    return (
      <Row>
      HI PETER
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  initializeQuestions
}, dispatch)

const mapStateToProps = state => {
  return {
    newSurveyQuestions: state.mainReducer.newSurveyQuestions,
    client_id: state.mainReducer.client_id
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyQuestionView);
