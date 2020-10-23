// app logic
import React, { Component } from 'react'
import Controls from '../components/resty/controls/Controls'
import HistoryList from '../components/resty/displays/HistoryList';
import Response from '../components/resty/displays/Response'
import { getRequest } from '../services/api-service';

export default class RestyContainer extends Component {
  state = {
    url: '',
    method: '',
    response: '',
    history: [],
    click: false
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  handleClick = async () => {
    // check form 
    if (!this.state.url || !this.state.method) return alert('Please fill out the required fields')

    this.setState(state => ({
      history: [
        ...state.history,
        { url: state.url, method: state.method }
      ],
      click: true
    }))

    if (this.state.method === 'GET') {
      const response = await getRequest(this.state.url)
      this.setState({ response: response })
    }
  }

  render() {
    const { click, history, response } = this.state;

    return (
      <>
        <h1>Resty Lab</h1>
        <div>
          Resty Container

          {/* form goes here */}
          <Controls onChange={this.handleChange} onClick={this.handleClick} />

          {/* conditionally render history */}
          {click &&
            <>
              <HistoryList history={history} />
              <Response apiResponse={response} />
            </>
          }
        </div>
      </>
    )
  }
}
