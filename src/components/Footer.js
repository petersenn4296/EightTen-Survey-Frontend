import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { Row, Col } from 'react-materialize'
import BackButton from './BackButton'

class Footer extends Component {
  render() {
    const { back } = this.props
    return (
      <Row className="container footer">
        <Col l={1}>{back > 0 ? <BackButton/> : null}</Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  const props = {
    back: state.mainReducer.back
  }
  return props
}

export default connect(
  mapStateToProps,
  null
)(Footer);
