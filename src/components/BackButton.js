import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { back } from '../actions'
import { Button, Icon } from 'react-materialize'


class BackButton extends Component {
  render() {
    const { back } = this.props
    return (
        <Button
          className='eightten_button'
          onClick={() => {
            back()
          }}
          id="back-button">
          <Icon>
            keyboard_arrow_left
          </Icon>
        </Button>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  back
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(BackButton);
