import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input } from 'react-materialize'
import { questionDataDispatch } from '../actions'

class TypeMultipleChoice extends Component {

  render() {
    const { label, mcData, questionDataDispatch } = this.props
    return (
      <Row>
        <Input s={12} type='select' label={label} defaultValue='0' onChange={(e) => questionDataDispatch(label, e.target[e.target.value].innerText)}>
          {mcData.map( (option, i) => {
            return <option key={option} value={i}>{option}</option>
            })
          }
        </Input>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  questionDataDispatch
}, dispatch)

const mapStateToProps = state => {
  return {
    mcType: state.mainReducer.mcType
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeMultipleChoice);
