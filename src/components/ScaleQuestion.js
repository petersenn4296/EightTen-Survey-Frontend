import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col, Button, Input } from 'react-materialize'
import { submitAnswer } from '../actions'
import '../App.css'

class ScaleQuestion extends Component {
  state = {
    postObj: {
      question_id: this.props.question.id,
      client_id: this.props.client_id,
      answer: '5',
      score: 5
    }
  }

  render() {
    const { submitAnswer, question } = this.props

    return (
      <div className="container question_box center-align">
        <Col className="question">
          {question.question}
        </Col>
        <Col >
          <Input
            type="range"
            id="answer"
            min="0"
            max="10"
            onChange={
              (e) => this.setState({postObj: {...this.state.postObj, question_id: question.id, answer: e.target.value, score:e.target.value}})
            }
          />
        </Col>
        <Button className="eightten_button" onClick={() => submitAnswer(this.state.postObj)}>Submit</Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  submitAnswer
}, dispatch)

const mapStateToProps = state => {
  return {
    client_id: state.mainReducer.client_id
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScaleQuestion);
