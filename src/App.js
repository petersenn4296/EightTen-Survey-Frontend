import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import './App.css';
import { Row } from 'react-materialize'
import LoginForm from './components/LoginForm'
import Header from './components/Header'
import CTSView from './components/CTSView'
import CompanyView from './components/CompanyView'
import TraitView from './components/TraitView'
import SurveyView from './components/SurveyView'
import SpecificQuestionView from './components/SpecificQuestionView'
import BackButton from './components/BackButton'
import CompanyTraitView from './components/CompanyTraitView'
import SurveyQuestionView from './components/SurveyQuestionView'

class App extends Component {

  viewHashTable = view => {
    switch(view){
      case 'CTSView':
        return <CTSView/>

      case 'Clients':
        return <CompanyView/>

      case 'Traits':
        return <TraitView/>

      case 'Surveys':
        return <SurveyView/>

      case 'SpecificQuestionView':
        return <SpecificQuestionView/>

      case 'CompanyTraitView':
        return <CompanyTraitView/>

      case 'SurveyQuestionView':
        return <SurveyQuestionView/>

      default: return <LoginForm/>
    }
  }

  render() {
    const { back } = this.props
    return (
      <div>
        <Header/>
        <Row className='center-align'>
          {back > 0 ? <BackButton/> : null}
        </Row>
        {this.viewHashTable(this.props.view)}
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//
// }, dispatch)

const mapStateToProps = state => {
  const props = {
    view: state.mainReducer.view,
    back: state.mainReducer.back
  }
  return props
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(App);
