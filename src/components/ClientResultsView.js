import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Row, Col, Tab, Tabs } from 'react-materialize'
import { loadResults, loadTraits, loadTrait } from '../actions'
import { Radar } from 'react-chartjs-2';
import Timeline from './Timeline'


class ClientResultsView extends Component {

  async componentDidMount() {
    this.props.loadResults(this.props.client_id)
    this.props.loadTraits()
    this.props.loadTrait()
  }

  averageScore = (arr) => {
    let result = 0
    arr.forEach(elem => {
      result += Number(elem.score)
    })
    if (result === 0) return 0
    return Number(result/arr.length).toFixed(2)
  }

  render() {
    const { employee_impact, community_impact, talent_lifecycle, company_name, traits, trait1_responses, trait2_responses, trait3_responses } = this.props
    const data = {
      labels: ['Employee Impact', 'Communication', 'Community Impact', 'Talent Life Cycle', 'Policy and Procedure'],
      datasets: [
        {
          label: 'Your Score',
          backgroundColor: 'rgba(238, 99, 43, 0.4)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,0.4)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [this.averageScore(employee_impact), 4, this.averageScore(community_impact), this.averageScore(talent_lifecycle), 6]
        },
        { label: '',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: 'rgba(0, 0, 0, 0)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(0, 0, 0, 0)',
          data: [0, 0, 0, 0, 10]
        },
        { label: 'Average Score',
          backgroundColor: 'rgba(25, 25, 25, 0.6)',
          borderColor: 'rgba(25, 25, 25, 0.6)',
          pointBackgroundColor: 'rgba(25, 25, 25, 0.6)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(25, 25, 25, 0.6)',
          data: [4.2, 5.4, 4.2, 5.1, 6.1]
        }
      ]
    }

    return (
      <div className="container center-align">
        <div className="container center-align result">
          <Col className="question">
            {`${company_name}'s Results`}
          </Col>
          <Radar className="center-align" data={data}/>
        </div>
        <div className="container center-align responses">
        <Col>
          <Tabs className='z-depth-1 tabs-fixed-width'>
              <Tab title="Employee Impact" active>
                <div className="timeline center-align">
                  <Timeline responses={trait1_responses}/>
                </div>
              </Tab>

              <Tab title="Community Impact" >
                <div className="timeline center-align">
                  <Timeline responses={trait2_responses}/>
                </div>
              </Tab>

              <Tab title="Talent Life Cycle">
                <div className="timeline center-align">
                  <Timeline responses={trait3_responses}/>
                </div>
              </Tab>
          </Tabs>
        </Col>
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loadResults,
  loadTraits,
  loadTrait
}, dispatch)

const mapStateToProps = state => {
  return {
    client_id: state.mainReducer.client_id,
    client: state.mainReducer.client,
    employee_impact: state.mainReducer.employee_impact,
    community_impact: state.mainReducer.community_impact,
    talent_lifecycle: state.mainReducer.talent_lifecycle,
    company_name: state.mainReducer.company_name,
    traits: state.mainReducer.traits,
    trait1_responses: state.mainReducer.trait1_responses,
    trait2_responses: state.mainReducer.trait2_responses,
    trait3_responses: state.mainReducer.trait3_responses
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientResultsView);
