import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col, Button, Input } from 'react-materialize'
import { submitAnswer } from '../actions'
import '../App.css'

class NestedQuestion extends Component {
  state = {
    postObj : {
      question_id: this.props.question.id,
      client_id: this.props.client_id,
      answer: 'no',
      score: '2',
    },
    nestedToggle: false
  }

  render() {
    const { submitAnswer, question } = this.props

    return (
      <div className="container question_box center-align">
        <Col className="question">
          {question.question}
        </Col>
        <div className="left-align yes-no-center">
          <Input
            name='yesorno'
            type='radio'
            value='yes'
            label='Yes'
            className='with-gap'
            onClick={(e) => {
              this.setState({nestedToggle: true})
            }}
          />
          <Input
            name='yesorno'
            type='radio'
            value='no'
            label='No'
            className='with-gap'
            onClick={(e) => {
              this.setState({nestedToggle: false})
            }}
          />
        </div>
        <Col className="left-align">
          {this.state.nestedToggle ?
            this.props.question.choices.map(choice => {
              return (
                <Input
                  key={choice.answer}
                  id={choice.value}
                  name="nested-choice"
                  type='radio'
                  value={choice.answer}
                  label={choice.answer}
                  className='with-gap'
                  onClick={
                    (e) => this.setState({postObj: {...this.state.postObj, question_id: question.id, answer: e.target.value, score: e.target.id}})
                  }
                />
              )
            })
            : null
          }
        </Col>
        <Col>
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
)(NestedQuestion);
