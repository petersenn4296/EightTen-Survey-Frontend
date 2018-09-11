import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Button } from 'react-materialize'
import { navigate, loadSurvey, questionDataDispatch } from '../actions'
import List from './List'

class SurveyView extends Component {

  async componentDidMount() {
    this.props.loadSurvey(this.props.item.id)
    this.props.questionDataDispatch('survey_id', this.props.item.id)
  }

  render() {
    const { navigate, survey, item } = this.props
    return (
      <Row>
        <Row className="container">
          hello survey view
          {survey ? <List data={survey}/> : null}
        </Row>
        <Row className="center-align">
          <Button className='eightten_button' onClick={() => navigate('SpecificQuestionView', {type: 'scale'})}>Add Question</Button>
        </Row>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  navigate,
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
