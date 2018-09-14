import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Button, Input } from 'react-materialize'
import { submitAnswer } from '../actions'
import '../App.css'

class McQuestion extends Component {
  state = {
    answer: null,
    score: null
  }

  render() {
    const { submitAnswer, client_id } = this.props
    const { id, question } = this.props.question
    const postObj = {
      question_id: id,
      client_id: client_id,
      answer: this.state.answer,
      score: this.state.score
    }

    return (
      <Row>
        <Row>
          {question}
        </Row>
        <Row>
          {this.props.question.choices.map(choice => {
            return (
              <Input name="mc-choice" id={choice.answer} type='radio' value={choice.value} label={choice.answer} className='with-gap' onChange={(e) => this.setState({answer: e.target.id, score: e.target.value})}/>
            )
          })}
        </Row>
        <Row>
          <Button className="eightten_button" onClick={() => submitAnswer(postObj)}>Submit</Button>
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
)(McQuestion);
