import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-materialize'
import BackButton from './BackButton'


class Jumbotron extends Component {
  render() {
    const { is_admin, back } = this.props
    return (
      <div className="jumbotron">
        <Col className="left-align">{back > 0 && is_admin ? <BackButton/> : null}</Col>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const props = {
    back: state.mainReducer.back,
    is_admin: state.mainReducer.is_admin
  }
  return props
}

export default connect(
  mapStateToProps,
  null
)(Jumbotron);
