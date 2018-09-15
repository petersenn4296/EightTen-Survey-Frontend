import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Button, Input } from 'react-materialize'
import { initializeQuestions, navigateDispatch } from '../actions'
import ScaleQuestion from './ScaleQuestion'
import TextQuestion from './TextQuestion'
import McQuestion from './McQuestion'
import NestedQuestion from './NestedQuestion'

import '../App.css'

class SurveyQuestionView extends Component {

  componentDidMount() {
    this.props.initializeQuestions()
  }

  generateQuestion = () => {
    if (this.props.newSurveyQuestions && this.props.questionIndex < 9) {
      if (this.props.newSurveyQuestions[this.props.questionIndex].type === 'scale'){
        return (
          <ScaleQuestion question={this.props.newSurveyQuestions[this.props.questionIndex]}/>
        )
      }
      if (this.props.newSurveyQuestions[this.props.questionIndex].type === 'text'){
        return (
          <TextQuestion question={this.props.newSurveyQuestions[this.props.questionIndex]}/>
        )
      }
      if (this.props.newSurveyQuestions[this.props.questionIndex].type === 'mc'){
        return (
          <McQuestion question={this.props.newSurveyQuestions[this.props.questionIndex]}/>
        )
      }
      if (this.props.newSurveyQuestions[this.props.questionIndex].type === 'nested'){
        return (
          <NestedQuestion question={this.props.newSurveyQuestions[this.props.questionIndex]}/>
        )
      }
    }
  }

  render() {
    const { newSurveyQuestions, client_id, navigateDispatch } = this.props
    return (
      <Row className='container center-align'>
        <Row>
          {newSurveyQuestions ? `${this.props.questionIndex + 1} / ${newSurveyQuestions.length}` : null}
        </Row>
        <Row>
          {this.generateQuestion()}
        </Row>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  initializeQuestions,
  navigateDispatch
}, dispatch)

const mapStateToProps = state => {
  return {
    newSurveyQuestions: state.mainReducer.newSurveyQuestions,
    client_id: state.mainReducer.client_id,
    questionIndex: state.mainReducer.questionIndex
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyQuestionView);
