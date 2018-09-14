import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Button, Input } from 'react-materialize'
import { submitAnswer } from '../actions'
import '../App.css'

class NestedQuestion extends Component {
  state = {
    answer: null,
    score: null,
    nestedToggle: false
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
          {console.log(this.props.question)}
        </Row>
        <Row>
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
        </Row>
        <Row>
          {this.state.nestedToggle ? this.props.question.choices.map(choice => {
            return (
              <Input id={choice.value} name="nested-choice" type='radio' value={choice.answer} label={choice.answer} className='with-gap' onChange={(e) => this.setState({answer: e.target.value, score: e.target.id})}/>
            )
          }) : null}
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
)(NestedQuestion);
