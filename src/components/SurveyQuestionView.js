import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row } from 'react-materialize'
// import { updateCredentials, login } from '../actions'
import '../App.css'

class SurveyQuestionView extends Component {

  render() {

    // const { updateCredentials, email, password, login, login_error } = this.props

    return (
      <Row className="container">

      HI PETER

      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

const mapStateToProps = state => {
  return {

  }
}

export default connect(
  null,
  null
)(SurveyQuestionView);
