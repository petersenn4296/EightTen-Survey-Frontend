import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Button, Collection, CollectionItem } from 'react-materialize'
import { questionDataDispatch, editTraitResponse } from '../actions'

class TraitView extends Component {


  render() {
    const { item, editTraitResponse } = this.props
    let responses = []
    if(item.id === 1) {
      responses = this.props.trait1_responses
    } else if(item.id === 2) {
      responses = this.props.trait2_responses
    } else if(item.id === 3) {
      responses = this.props.trait3_responses
    }

    return (
      <Row className="container center-align cts_box">
        <h4>{item.trait} Responses</h4>
        <Collection className="container center-align">
          {responses[0] ? responses.map(response => {
            return <CollectionItem key={response.response}>{response.response}</CollectionItem>
          }
      ) : null }
    </Collection>
    {/* write patch for trait response */}
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
    trait1_responses: state.mainReducer.trait1_responses,
    trait2_responses: state.mainReducer.trait2_responses,
    trait3_responses: state.mainReducer.trait3_responses

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TraitView);
