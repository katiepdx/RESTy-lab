// app logic
import React, { Component } from 'react'
import Controls from '../components/resty/controls/Controls'
import HistoryList from '../components/resty/displays/HistoryList';
import Response from '../components/resty/displays/Response'
import { getRequest } from '../services/api-service';
import styles from './RestyContainer.css'

export default class RestyContainer extends Component {
  state = {
    url: '',
    method: '',
    rawJson: '',
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

    // check if the search is already in history 
    // this.state.history.map(search => {
    //   if (search.url === this.state.url && search.method === this.state.method) {
    //     return alert('Already searched')
    //   }
    // })

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
        <body>
          <h1>Resty Lab</h1>
          <div>
            {/* form goes here */}
            <Controls onChange={this.handleChange} onClick={this.handleClick} />

            {/* conditionally render history */}
            {click &&
              <section className={styles.historyAndResponse}>
                <div>
                  <h2>Search History</h2>
                  <HistoryList history={history} />
                </div>

                <div>
                  <h2>API Response</h2>
                  <Response apiResponse={response} />
                </div>
              </section>
            }
          </div>
        </body>
      </>
    )
  }
}
