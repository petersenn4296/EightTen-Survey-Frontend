import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Collection, CollectionItem } from 'react-materialize'
import { navigate } from '../actions'

class List extends Component {
  render() {
    let { CTSView, dataText, navigate } = this.props
    return (
      <Collection className="container center-align">
        {this.props.data.map(item => {
          let itemText = ''
          for (let listItem in item) {
              itemText = item[dataText]
          }
          return <CollectionItem onClick={() => navigate(CTSView, item)}>{itemText}</CollectionItem>
        }
      )}

      </Collection>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  navigate
}, dispatch)

const mapStateToProps = state => {
  const props = {
    CTSView: state.mainReducer.CTSView,
    dataText: state.mainReducer.dataText
  }
  return props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
