import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'

export default class Header extends Component {
  render() {
    return (
      <Row className="container header">
        <Col l={2} className="left-align">
          <img width="209.9" height="33.51" alt="EightTen company logo" src={require('../810/eight_ten_logo.png')}/>
        </Col>
        <Col l={4}></Col>
      </Row>
    )
  }
}
