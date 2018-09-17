import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Row, Col, Tab, Tabs } from 'react-materialize'
import { loadResults, loadTraits } from '../actions'
import { Radar } from 'react-chartjs-2';


class ClientResultsView extends Component {

  async componentDidMount() {
    this.props.loadResults(this.props.client_id)
    this.props.loadTraits()
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
    const { employee_impact, community_impact, talent_lifecycle, company_name, traits } = this.props
    const data = {
      labels: ['Employee Impact', 'Community Impact', 'Talent Life Cycle'],
      datasets: [
        {
          label: 'Inclusion Dispersion',
          backgroundColor: 'rgba(238, 99, 43, 0.4)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,0.4)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [this.averageScore(employee_impact), this.averageScore(community_impact), this.averageScore(talent_lifecycle)]
        },
        { label: '',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0,0,0,0)',
          pointBackgroundColor: 'rgba(0,00,0,0)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(0,0,0,0)',
          data: [0, 9, 8]
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
                {/* <Row>
                  {employee_impact ? `Score: ${data.datasets[0].data[0]}` : null}
                </Row> */}
                <Row className="response">
                  {traits ? traits[0].response : null}
                </Row>
              </Tab>

              <Tab title="Community Impact">
                {/* <Row>
                  {community_impact ? `Score: ${data.datasets[0].data[1]}` : null}
                </Row> */}
                <Row className="response">
                  {traits ? traits[1].response : null}
                </Row>
              </Tab>

              <Tab title="Talent Life Cycle">
                {/* <Row>
                  {talent_lifecycle ? `Score: ${data.datasets[0].data[2]}` : null}
                </Row> */}
                <Row className="response">
                  {traits ? traits[2].response : null}
                </Row>
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
  loadTraits
}, dispatch)

const mapStateToProps = state => {
  return {
    client_id: state.mainReducer.client_id,
    client: state.mainReducer.client,
    employee_impact: state.mainReducer.employee_impact,
    community_impact: state.mainReducer.community_impact,
    talent_lifecycle: state.mainReducer.talent_lifecycle,
    company_name: state.mainReducer.company_name,
    traits: state.mainReducer.traits
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientResultsView);
