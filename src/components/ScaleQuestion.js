import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Button, Input } from 'react-materialize'
import { submitAnswer } from '../actions'
import '../App.css'

class ScaleQuestion extends Component {
  state = {
    answer: 5
  }

  render() {
    const { submitAnswer, client_id } = this.props
    const { id, question } = this.props.question
    const postObj = {
      question_id: id,
      client_id: client_id,
      answer: this.state.answer,
      score: this.state.answer
    }

    return (
      <Row>
        <Row>
          {question} question id: {id} client id: {client_id}
        </Row>
        <Row >
          <Input type="range" id="answer" min="0" max="10" onChange={ (e) => this.setState({answer: e.target.value})}/>
        </Row>
        <Button className="eightten_button" onClick={() => submitAnswer(postObj)}>Submit</Button>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  submitAnswer
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
)(ScaleQuestion);
