import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Collection, CollectionItem } from 'react-materialize'

class List extends Component {
  // constructor(props) {
  //     super(props)
  //     this.state = {
  //     }
  //   }

  render() {
    return (
      <Collection className="container center-align">
        {this.props.data.map(item => {
          let itemText = ''
          for (let listItem in item) {
            if (itemText.length > 2) {
              itemText += `, ${item[listItem]}`
            } else {
              itemText = item[listItem]
            }
          }
          console.log('item text', itemText)
          return <CollectionItem href='#'>{itemText}</CollectionItem>
        }
      )}
{/*
        <CollectionItem href='#'>Alvin</CollectionItem>
        <CollectionItem href='#'>Alvin</CollectionItem>
        <CollectionItem href='#'>Alvin</CollectionItem> */}
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
