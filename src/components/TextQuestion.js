import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Button, Input } from 'react-materialize'
import { submitAnswer } from '../actions'
import '../App.css'

class TextQuestion extends Component {

  state = {
    answer: null
  }

  render() {
    const { client_id, submitAnswer } = this.props
    const { id, question  } = this.props.question

    const postObj = {
      question_id: id,
      client_id: client_id,
      answer: this.state.answer,
      score: 7
    }

    return (
      <Row>
        <Row>
          {question}
        </Row>
        <Row>
          <Input type="textarea" onChange={(e) => this.setState({answer: e.target.value})}/>
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
)(TextQuestion);
