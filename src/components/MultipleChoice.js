import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Button, Input } from 'react-materialize'
import { navigate } from '../actions'

class MultipleChoice extends Component {

  render() {
    const { label, defaultValue, mcData } = this.props
    console.log(this.props.mcData)
    return (
      <Row>
        <Input s={12} type='select' label={label} defaultValue='0'>
          {mcData.map( (option, i) => {
            return <option value={i}>{option}</option>
          })}
        </Input>
      </Row>
    )
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//   navigate
// }, dispatch)
//
// const mapStateToProps = state => {
//   return {
//     item: state.mainReducer.item,
//     survey: state.mainReducer.survey
//   }
// }
export default connect(
  // mapStateToProps,
  // mapDispatchToProps
  null,
  null
)(MultipleChoice);
