import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input } from 'react-materialize'
import { questionDataDispatch } from '../actions'

class ValueMultipleChoice extends Component {

  render() {
    const { label, questionDataDispatch } = this.props
    let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
      <Row>
        <Input s={12} type='select' label={label} defaultValue='0'
          onChange={(e) => questionDataDispatch(label, e.target.value)}>
          { values.map( (i) => {
            return <option key={i} value={i}>{i}</option>
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

export default connect(
  null,
  mapDispatchToProps
)(ValueMultipleChoice);
