import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Collection, CollectionItem } from 'react-materialize'

class List extends Component {
  constructor(props) {
      super(props)
      this.state = {
      }
    }

  render() {
    return (
      <Collection className="container center-align">
        <CollectionItem href='#'>Alvin</CollectionItem>
        <CollectionItem href='#'>Alvin</CollectionItem>
        <CollectionItem href='#'>Alvin</CollectionItem>
        <CollectionItem href='#'>Alvin</CollectionItem>
      </Collection>
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
)(List);
