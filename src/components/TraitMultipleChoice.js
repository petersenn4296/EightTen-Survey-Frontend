import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input } from 'react-materialize'
import { questionDataDispatch } from '../actions'

class TraitMultipleChoice extends Component {

  render() {
    const { label, name, mcData, questionDataDispatch } = this.props

    return (
      <Row>
        <Input s={12} type='select' label={name} defaultValue='0'
          onChange={(e) => questionDataDispatch(label, e.target.value)}>
          { mcData.map( (option, i) => {
            return <option key={option} value={i + 1}>{option}</option>
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
)(TraitMultipleChoice);
