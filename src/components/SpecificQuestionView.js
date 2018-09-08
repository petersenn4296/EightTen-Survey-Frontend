import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button, Icon } from 'react-materialize'
import { navigate } from '../actions'
import MultipleChoice from './MultipleChoice'
import List from './List'

class SpecificQuestionView extends Component {

  render() {
    const { navigate, item } = this.props
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
          placeholder="Enter your question..."
          s={12} label="Question"
          validate defaultValue={item.question}/>
        <Input s={12} placeholder="5" label="Value"/>
        <MultipleChoice label="Type" defaultValue={item.type} mcData={mcData}/>
        <Button>Submit</Button>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  navigate
}, dispatch)

const mapStateToProps = state => {
  return {
    item: state.mainReducer.item
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecificQuestionView);
