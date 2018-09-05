import {React, Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class LoginForm extends Component {
  render() {
    return (
      
    )
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//   toggleAddPost,
//   loadApiPosts,
//   loadApiComments
// }, dispatch)

// const mapStateToProps = state => {
//   const props = {
//     toggle: state.post.toggle,
//     posts: state.post.posts,
//     comments: state.comments
//   }
//   return props
// }

export default connect(
  null
)(LoginForm);
