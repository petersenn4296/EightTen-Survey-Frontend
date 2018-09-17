import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'

export default class Footer extends Component {
  render() {
    const { back, is_admin } = this.props
    return (
      <footer className="footer">
        <div className="blue_bar"></div>
            © 2018 EightTen LLC  |  All Rights Reserved.
      </footer>
    )
  }
}
