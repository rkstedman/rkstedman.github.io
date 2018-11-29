import React, { Component } from 'react';
import editDistance from './editDistance'
// import logo from './logo.svg';
// import './App.css';

import EditDistanceTable from './EditDistanceTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word1: 'editing',
      word2: 'distance'
    };
    this.handleChangeWord1 = this.handleChangeWord1.bind(this);
    this.handleChangeWord2 = this.handleChangeWord2.bind(this);
  }

  componentDidMount() {
    this.refreshEditDistanceTable();
  }

  refreshEditDistanceTable() {
    let D = editDistance(this.state.word1, this.state.word2);
    console.log(D);
    this.setState({
      editDistanceTable: D,
      editDistance: D[D.length - 1][D[0].length - 1]
    });
  }

  handleChangeWord1(event) {
    this.setState({word1: event.target.value});
    this.refreshEditDistanceTable();
  }
  handleChangeWord2(event) {
    this.setState({word2: event.target.value});
    this.refreshEditDistanceTable();
  }

  render() {
    return (
      <React.Fragment>
        <section className="hero is-primary">
          <div className="hero-body">
            <h1 className="title">
              Calculating Levenshtein Distance
            </h1>
            <p className="subtitle">
              A way of measuring the similarity between two strings
            </p>
          </div>
        </section>
        <section className="section">
          <div className="columns">
            <div className="column is-one-third">
              <div className="content">
                Find the edit distance between
                <div className="field">
                  <div className="control">
                    <input className="input is-primary"
                      type="text"
                      placeholder="First word"
                      value={this.state.word1}
                      onChange={this.handleChangeWord1} />
                    </div>
                </div>
                and
                <div className="field">
                  <div className="control">
                    <input className="input is-primary"
                      type="text"
                      placeholder="Second word"
                      value={this.state.word2}
                      onChange={this.handleChangeWord2} />.
                    </div>
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="content is-large">
                <p>
                  Edit distance is <strong className="has-text-primary">{this.state.editDistance}</strong>!
                </p>
              </div>
              <EditDistanceTable
                word1={this.state.word1}
                word2={this.state.word2}
                editDistanceTable={this.state.editDistanceTable}/>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
