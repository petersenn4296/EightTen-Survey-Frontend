import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { Row } from 'react-materialize'

class Header extends Component {
  render() {
    return (
      <Row className="container center-align" s={12} m={12} l={2}>
          <img alt="EightTen company logo"  src={require('../810/eight_ten_logo.png')}/>
      </Row>
    )
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//
// }, dispatch)
//
// const mapStateToProps = state => {
//   // const props = {
//   //   toggle: state.post.toggle,
//   //   posts: state.post.posts,
//   //   comments: state.comments
//   // }
//   // return props
// }

export default connect(
  null,
  null
)(Header);
