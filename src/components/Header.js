import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col } from 'react-materialize'

class Header extends Component {
  constructor(props) {
      super(props)
      this.state = {
      }
    }

  render() {
    return (
      <Row className="container" s={12} m={12} l={2}>
        {/* <Col s={1} m={3} l={3}>

        </Col> */}
        <Col className="center-align" s={12} m={12} l={12}>
          <img src={require('../810/eight_ten_logo.png')}/>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

const mapStateToProps = state => {
  // const props = {
  //   toggle: state.post.toggle,
  //   posts: state.post.posts,
  //   comments: state.comments
  // }
  // return props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
