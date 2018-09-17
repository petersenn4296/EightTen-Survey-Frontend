import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement, WorkIcon }  from 'react-vertical-timeline-component';
import { Icon } from 'react-materialize'

import 'react-vertical-timeline-component/style.min.css';


export default class Timeline extends Component {
  render() {
    console.log('in here', this.props.responses);
    const {responses} = this.props
    return (
      <VerticalTimeline className='vertical-timeline'>
        {responses ? responses.map((response, i) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work "
                iconStyle={{ background: '#1f73be', color: '#fff' }}
                >
                  <p>
                    {response.response}
                  </p>
                </VerticalTimelineElement>
            )
          })
          : null
        }
        </VerticalTimeline>

    )
  }
}
