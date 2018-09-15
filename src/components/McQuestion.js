import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Button, Input } from 'react-materialize'
import { submitAnswer } from '../actions'
import '../App.css'

class McQuestion extends Component {
  state = {
    postObj: {
      question_id: this.props.question.id,
      client_id: this.props.client_id,
      answer: null,
      score: null
    }
  }

  render() {
    const { submitAnswer, question } = this.props

    console.log('>>>>>>>>>>>>>>>>>>>>>MC');
    console.log(question.id);
    console.log(this.state.postObj.question_id);

    return (
      <Row>
        <Row>
          {question.question}
        </Row>
        <Row>
          {question.choices.map(choice => {
            return (
                <Input
                  key={choice.answer}
                  name="mc-choice"
                  id={choice.answer}
                  type='radio'
                  value={choice.value}
                  label={choice.answer}
                  className='with-gap'
                  onClick={
                    (e) => this.setState({postObj: {...this.state.postObj, question_id: question.id, answer: e.target.id, score: e.target.value}})
                  }
                />
              )
            })
          }
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
)(McQuestion);
