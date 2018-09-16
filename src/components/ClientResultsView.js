import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col, Tab, Tabs } from 'react-materialize'
import AccordionView from './AccordionView'
import { loadResults } from '../actions'
import { Radar } from 'react-chartjs-2';


class ClientResultsView extends Component {

  async componentDidMount() {
    this.props.loadResults(this.props.client_id)
  }

  averageScore = (arr) => {
    let result = 0
    arr.forEach(elem => {
      result += Number(elem.score)
    })
    return Number(result/arr.length).toFixed(2)
  }

  render() {
    const { client_id, client, employee_impact, community_impact, talent_lifecycle, company_name } = this.props

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
        }
      ]
    }

    const options = {
      options: {
        animation: {

        }
      }
    }


    return (
      <div className="container center-align">
        <div className="container center-align result">
          <Col>
            <h4>{`${company_name}'s Results`}</h4>
          </Col>
          <Radar className="center-align" options={options} data={data}/>
        </div>
        <Col>
          <Tabs className='tab-demo z-depth-1'>
              <Tab title="Employee Impact">Employee Impact</Tab>
              <Tab title="Community Impact<">Community Impact</Tab>
              <Tab title="Talent Life Cycle">Talent Life Cycle</Tab>
          </Tabs>
        </Col>
        <Col>
          <h4>{client_id}</h4>
        </Col>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loadResults
}, dispatch)

const mapStateToProps = state => {
  return {
    client_id: state.mainReducer.client_id,
    client: state.mainReducer.client,
    employee_impact: state.mainReducer.employee_impact,
    community_impact: state.mainReducer.community_impact,
    talent_lifecycle: state.mainReducer.talent_lifecycle,
    company_name: state.mainReducer.company_name
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientResultsView);
