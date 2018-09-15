import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Button, Input } from 'react-materialize'
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

    console.log('>>>>>>>>>>>>>>>>>>>>>TEXT');
    console.log(question.id);
    console.log(this.state.postObj.question_id);

    return (
      <Row>
        <Row>
          {question.question}
        </Row>
        <Row>
          <Input type="textarea" onChange={(e) => this.setState({postObj: {...this.state.postObj, question_id: question.id, answer: e.target.value}})}/>
        </Row>
        <Row>
          <Button className="eightten_button" onClick={() => submitAnswer(this.state.postObj)}>Submit</Button>
        </Row>
      </Row>
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
