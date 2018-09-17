import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Input } from 'react-materialize'
import { loadClient } from '../actions'
import List from './List'

class CompanyView extends Component {

  async componentDidMount() {
    this.props.loadClient(this.props.item.id)
  }

  averageScore = (arr) => {
    let result = 0
    arr.forEach(elem => {
      if (elem.score) {
        result += Number(elem.score)
      }
    })
    if (result === 0) return 0
    return Number(result / arr.length).toFixed(2)
  }


  render() {

    const { item, traits, employee_impact, community_impact, talent_lifecycle } = this.props
    let employee_impact_average = this.averageScore(employee_impact)
    let community_impact_average = this.averageScore(community_impact)
    let talent_lifecycle_average = this.averageScore(talent_lifecycle)
    let company_average = this.averageScore([
      {score: employee_impact_average},
      {score: community_impact_average},
      {score: talent_lifecycle_average}
    ])

    return (
      <Row className="container center-align login_box">
        <h4>{item.company_name} {company_average ? ` | Avg. Score: ${company_average}` : ` | Avg. Score: 0`}</h4>
        <Row>
          {traits ? <List data={traits} employee_impact={employee_impact_average} community_impact={community_impact_average} talent_lifecycle={talent_lifecycle_average}/> : null}
        </Row>
        {/* <Row>
          <Input name='on' type='switch' value='1' />
        </Row> */}
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loadClient,
}, dispatch)

const mapStateToProps = state => {
  return {
    item: state.mainReducer.item,
    traits: state.mainReducer.traits,
    employee_impact: state.mainReducer.employee_impact,
    community_impact: state.mainReducer.community_impact,
    talent_lifecycle: state.mainReducer.talent_lifecycle
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyView);
