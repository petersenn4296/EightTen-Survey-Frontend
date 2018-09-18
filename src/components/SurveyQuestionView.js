import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Col } from 'react-materialize'
import { initializeQuestions } from '../actions'

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
    const { newSurveyQuestions } = this.props
    return (
      <div className='container'>
        <Col className='center-align progress_number'>
          {newSurveyQuestions ? `${this.props.questionIndex + 1} / ${newSurveyQuestions.length}` : null}
        </Col>
        {this.generateQuestion()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  initializeQuestions,
}, dispatch)

const mapStateToProps = state => {
  return {
    newSurveyQuestions: state.mainReducer.newSurveyQuestions,
    questionIndex: state.mainReducer.questionIndex
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyQuestionView);
