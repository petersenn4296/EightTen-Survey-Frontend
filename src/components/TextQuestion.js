import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Col, Button, Input } from 'react-materialize'
import { submitAnswer } from '../actions'
import '../App.css'

class TextQuestion extends Component {

  state = {
    postObj: {
      question_id: this.props.question.id,
      client_id: this.props.client_id,
      answer: null,
      score: '7'
    }
  }

  render() {
    const { question, submitAnswer } = this.props

    return (
      <div className="container question_box center-align">
        <Col offset="l4" l={4} className="pad-bot question">
          {question.question}
        </Col>
        <Col offset="l4" l={4}>
          <Input type="textarea" onChange={(e) => this.setState({postObj: {...this.state.postObj, question_id: question.id, answer: e.target.value}})}/>
        </Col>
        <Col offset="l4" l={4}>
          <Button className="eightten_button" onClick={() => submitAnswer(this.state.postObj)}>Submit</Button>
        </Col>
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
)(TextQuestion);
