import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row } from 'react-materialize'
import List from './List'

class CTSView extends Component {
  constructor(props) {
      super(props)
      this.state = {
      }
    }

  render() {
    return (
      <div>
        <Row className="container center-align">
            <h4 id="cts-header">Traits</h4>
        </Row>
        <Row>
          <List/>
        </Row>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

const mapStateToProps = state => {
  return {
    CTSView: state
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CTSView);
