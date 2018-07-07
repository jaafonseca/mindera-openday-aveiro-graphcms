import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import logo from './logo.svg';
import './App.css';

export const ALL_TALKS_QUERY = gql`
  query {
    opendays {
      title
      date
    }
  }
`

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mindera Open Day @ Aveiro</h1>
        </header>
        <p className="App-intro">
          Showcase the use of GraphCMS
        </p>
        {this.props.allOpendaysQuery.opendays
          && this.props.allOpendaysQuery.opendays
          && this.props.allOpendaysQuery.opendays.map(openday => (
            <div key={openday}>
            <h1>{openday.title}</h1>
            <h2>{openday.date}</h2>
            </div>
          ))}
      </div>
    );
  }
}

const AppWithQuery = graphql(ALL_TALKS_QUERY, {
  name: 'allOpendaysQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(Home)

export default AppWithQuery;
