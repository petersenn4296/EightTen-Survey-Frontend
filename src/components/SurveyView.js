import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Button } from 'react-materialize'
import { navigateDispatch, loadSurvey, questionDataDispatch } from '../actions'
import List from './List'

class SurveyView extends Component {

  async componentDidMount() {
    this.props.loadSurvey(this.props.item.id)
    this.props.questionDataDispatch('survey_id', this.props.item.id)
  }

// go into survey back and into another survey... redifines state.survey as undefined

  render() {
    const { navigateDispatch, survey } = this.props
    return (
      <Row>
        <Row className="container">
          hello survey view
          {survey[0] ? <List data={survey}/> : null}
        </Row>
        <Row className="center-align">
          <Button className='eightten_button' onClick={() => navigateDispatch('SpecificQuestionView', {type: 'scale'})}>Add Question</Button>
        </Row>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  navigateDispatch,
  loadSurvey,
  questionDataDispatch
}, dispatch)

const mapStateToProps = state => {
  return {
    item: state.mainReducer.item,
    survey: state.mainReducer.survey
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyView);
