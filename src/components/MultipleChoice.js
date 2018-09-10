import React, { Component } from 'react'
import { Row, Input } from 'react-materialize'

export default class MultipleChoice extends Component {
  render() {
    const { label, mcData } = this.props
    return (
      <Row>
        <Input s={12} type='select' label={label} defaultValue='0'>
          {mcData.map( (option, i) => {
            return <option key={option} value={i}>{option}</option>
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
// export default connect(
//   // mapStateToProps,
//   // mapDispatchToProps
//   null,
//   null
// )(MultipleChoice);
