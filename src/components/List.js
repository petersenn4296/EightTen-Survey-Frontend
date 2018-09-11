import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Collection, CollectionItem } from 'react-materialize'
import { navigate } from '../actions'

class List extends Component {
  render() {
    let { CTSView, dataText, navigate, data } = this.props
    let destination = CTSView
    if (dataText === 'question') {
      destination = 'SpecificQuestionView'
    }
    if (data[0].trait && CTSView === 'Clients') {
      destination = 'CompanyTraitView'
    }
    console.log(data);
    return (
      <Collection className="container center-align">
        {data.map(item => {
          let itemText = ''
          itemText = item[dataText]
          return <CollectionItem key={itemText} onClick={() => navigate(destination, item)}>{itemText}</CollectionItem>
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
