import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { Row, Col } from 'react-materialize'
import BackButton from './BackButton'

class Footer extends Component {
  render() {
    const { back } = this.props
    return (
      <div className="footer-copyright">
        <Col className="center-align">{back > 0 ? <BackButton/> : null}</Col>
        <div className="container">
          © 2018 EightTen LLC  |  All Rights Reserved.
        </div>
      </div>
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
