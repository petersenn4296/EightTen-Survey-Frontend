import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button} from 'react-materialize'
import TraitMultipleChoice from './TraitMultipleChoice'
import TypeMultipleChoice from './TypeMultipleChoice'
import CreateMultipleChoiceOptions from './CreateMultipleChoiceOptions'
import { questionDataDispatch, addQuestion, back } from '../actions'


class SpecificQuestionView extends Component {

  render() {
    const { item, questionDataDispatch, addQuestion, questionObj, back } = this.props
    const traits = ['Employee Impact', 'Community Impact', 'Talent Life Cycle']

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

    if (questionObj.type === 'nested') {
      console.log('yeeeehaawwwwww');
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
          <TraitMultipleChoice
            label="trait_id"
            defaultValue={traits[0]}
            mcData={traits}
            type="text"
            name="Trait"
          />
          <TypeMultipleChoice
            label="type"
            defaultValue={item.type}
            mcData={mcData}
            type="text"
            name="Type"
          />
          { questionObj.type === 'nested' ?
            <Input
              s={12}
              placeholder="enter your nested question"
              label="Question"
              validate defaultValue={item.nested_question}
              type="text"
              name="question"
              onChange={(e)=> questionDataDispatch('nested_question', e.target.value)}
            />
           : null}
          { questionObj.type === 'mc' || questionObj.type === 'nested' ?
           <CreateMultipleChoiceOptions/>
           : null }
          <Button className='eightten_button' type='submit' value='Submit' onClick={()=>{addQuestion(questionObj); window.Materialize.toast('Question added!', 10000); back()}}>Submit</Button>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  questionDataDispatch,
  addQuestion,
  back
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
