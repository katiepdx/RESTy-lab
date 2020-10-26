// app logic
import React, { Component } from 'react'
import Controls from '../components/resty/controls/Controls'
import HistoryList from '../components/resty/displays/HistoryList';
import Response from '../components/resty/displays/Response'
import { getRequest, postRequest, putRequest, deleteRequest } from '../services/api-service';
import styles from './RestyContainer.css'

export default class RestyContainer extends Component {
  state = {
    url: '',
    method: '',
    stringyJson: {},
    response: '',
    history: [],
    click: false
  }

  handleChange = (e) => {
    e.preventDefault();

    // stringify json (from textarea field) for state
    if (e.target.name === 'json') {
      const stringyData = JSON.stringify(e.target.value)
      console.log(stringyData)
      this.setState({ stringyJson: stringyData })
    }

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

    // api req using method
    if (this.state.method === 'GET') {
      const response = await getRequest(this.state.url)
      this.setState({ response })
    } else if (this.state.method === 'POST') {
      const response = await postRequest(this.state.url, this.state.stringyJson)
      this.setState({ response })
    } else if (this.state.method === 'PUT') {
      const response = await putRequest(this.state.url, this.state.stringyJson)
      this.setState({ response })
    } else if (this.state.method === 'DELETE') {
      const response = await deleteRequest(this.state.url)
      this.setState({ response })
    }
  }

  render() {
    const { click, history, response } = this.state;

    return (
      <>
        <section>
          <h1>Resty Lab</h1>
          <div>
            {/* form goes here */}
            <Controls onChange={this.handleChange} onClick={this.handleClick} />

            {/* conditionally render history */}
            {click &&
              <section data-testid="display" className={styles.historyAndResponse}>
                <div>
                  <h2>Search History</h2>
                  <HistoryList history={history} />
                </div>

                <div>
                  <h2>API Response</h2>
                  <Response data-testid="json-response" apiResponse={response} />
                </div>
              </section>
            }
          </div>
        </section>
      </>
    )
  }
}
