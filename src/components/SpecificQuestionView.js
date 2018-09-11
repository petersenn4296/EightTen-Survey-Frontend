import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button} from 'react-materialize'
import MultipleChoice from './MultipleChoice'
import { questionDataDispatch, addQuestion } from '../actions'


class SpecificQuestionView extends Component {

  render() {
    const { item, questionDataDispatch, addQuestion } = this.props
    const mcData = [item.type]
    if(item.type === 'mc'){
      mcData.push('scale', 'nested', 'text')
    } else if (item.type === 'scale') {
      mcData.push('mc', 'nested', 'text')
    } else if (item.type === 'nested') {
      mcData.push('mc', 'scale', 'text')
    } else if (item.type === 'text') {
      mcData.push('mc', 'nested', 'scale')
    }

    return (
      <Row className="container">
          <Input
            s={12}
            placeholder="Enter your question..."
            label="Question"
            validate defaultValue={item.question}
            type="text"
            name="question"
            onChange={(e)=> questionDataDispatch('question', e.target.value)}
          />
          <Input
            s={12}
            placeholder="5"
            label="Value"
            type="text"
            name="value"
            onChange={(e)=> questionDataDispatch('value', e.target.value)}
          />
          <MultipleChoice
            label="Type"
            defaultValue={item.type}
            mcData={mcData}
            type="text"
            name="type"
          />
          <Button type='submit' value='Submit' onClick={()=>addQuestion(this.props.questionObj)}>Submit</Button>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  questionDataDispatch,
  addQuestion
}, dispatch)

const mapStateToProps = state => {
  return {
    item: state.mainReducer.item,
    questionObj: state.mainReducer.questionObj
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecificQuestionView);
