import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Collection, CollectionItem, Row, Button, Input } from 'react-materialize'
import { navigate } from '../actions'

class CreateMultipleChoiceOptions extends Component {
  render() {

    return (
      <Row>
        <Collection className="container center-align">
         <CollectionItem key={'hello'} >Hello</CollectionItem>
        </Collection>
        <Input
          s={12}
          placeholder="Enter option for multiple choice question"
          label="Answer"
          type="text"
          name="answer"
          onChange={(e)=> console.log(e.target.value)}
        />
        <Input
          s={12}
          placeholder="5"
          label="Value"
          type="text"
          name="value"
          onChange={(e)=> console.log(e.target.value)}
        />
        <Button type='submit' value='Submit' onClick={()=> console.log('hello')}>add multiple choice option</Button>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  navigate
}, dispatch)

const mapStateToProps = state => {
  const props = {
  }
  return props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMultipleChoiceOptions);
