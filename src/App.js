import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import './App.css';

import LoginForm from './components/LoginForm'
import Header from './components/Header'
// import List from './components/List'
import CTSView from './components/CTSView'

class App extends Component {

  viewHashTable = (view) => {
    switch(view){
      case 'CTSView':
        return <CTSView/>

      default: return <LoginForm/>
    }
  }

  render() {
    const {view} = this.props
    return (
      <div>
        <Header/>
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
    logged_in: state.mainReducer.logged_in,
    CTSView: state.mainReducer.CTSView,
    view: state.mainReducer.view
  }
  return props
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(App);
