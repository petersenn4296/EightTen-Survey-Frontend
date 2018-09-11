import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Collection, CollectionItem } from 'react-materialize'
import { navigate } from '../actions'

class List extends Component {
  render() {
    let { CTSView, dataText, navigate, data, employee_impact, community_impact, talent_lifecycle } = this.props
    let destination = CTSView
    if (dataText === 'question') {
      destination = 'SpecificQuestionView'
    }
    if (data[0].trait && CTSView === 'Clients') {
      destination = 'CompanyTraitView'
    }
    return (
      <Collection className="container center-align">
        {data.map(item => {
          let itemText = ''
          itemText = item[dataText]

          let scoreText = ''
          if (item.id) {
            if (item.id === 1) {
              scoreText = employee_impact
            } else if (item.id === 2) {
              scoreText = community_impact
            } else if (item.id === 3) {
              scoreText = talent_lifecycle
            }
          }

          return <CollectionItem key={itemText} onClick={() => navigate(destination, item)}>{itemText}{scoreText ? ` | Avg. Score: ${scoreText}` : null}</CollectionItem>
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
