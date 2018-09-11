import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input, Button } from 'react-materialize'
import { questionDataDispatch, editTraitResponse } from '../actions'

class TraitView extends Component {

  render() {
    const { item, questionDataDispatch, editTraitResponse, traitDataDispatch } = this.props
    return (
      <Row className="container center-align">
        Response:
        <Input
          s={12}
          placeholder="Enter your question..."
          label="Response"
          validate defaultValue={item.response}
          type="text"
          name="response"
          onChange={(e)=> questionDataDispatch('response', e.target.value)}
        />
        <Row>
          <Button className='eightten_button' type='submit' value='Save' onClick={()=>editTraitResponse(this.props.response, item.id)}>Save</Button>
        </Row>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  questionDataDispatch,
  editTraitResponse
}, dispatch)

const mapStateToProps = state => {
  return {
    item: state.mainReducer.item,
    response: state.mainReducer.response
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TraitView);
