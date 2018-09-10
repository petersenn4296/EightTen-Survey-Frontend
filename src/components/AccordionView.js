import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Collapsible, CollapsibleItem } from 'react-materialize'
class AccordionView extends Component {

  render() {
    const { item, client, traits, employee_impact, community_impact, talent_lifecycle, viewData } = this.props
    return (
        <Collapsible accordion>
          {viewData.map(item => {
            return (
              <CollapsibleItem key={item.question} header={<span className="question-text">{item.question}</span>} icon='question_answer'>
                Answer: {`${item.answer}`}
                <br></br>
                Score: {`${item.score}`}
              </CollapsibleItem>
            )
          })}
        </Collapsible>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

const mapStateToProps = state => {
  return {
    item: state.mainReducer.item,
    client: state.mainReducer.client,
    traits: state.mainReducer.traits,
    viewData: state.mainReducer.viewData
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccordionView);
