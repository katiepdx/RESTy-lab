// app logic
import React, { Component } from 'react'
import Controls from '../components/resty/controls/Controls'
import HistoryList from '../components/resty/displays/HistoryList';

export default class RestyContainer extends Component {
  // state - url, method, click, json
  state = {
    url: '',
    method: '',
    json: 'sample json response',
    response: '',
    history: [],
    click: false
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState(state => ({
      // update using previous state
      history: [
        ...state.history,
        { url: state.url, method: state.method }
      ],
      click: true
    }))
  }

  render() {
    // deconstruct state 
    const { url, method, click, history } = this.state;

    return (
      <>
        <h1>Resty Lab</h1>
        <div>
          Resty Container

          {/* form goes here */}
          <Controls onChange={this.handleChange} onClick={this.handleClick} />

          {/* conditionally render history */}
          {click && <HistoryList history={history} />}
        </div>
      </>
    )
  }
}
