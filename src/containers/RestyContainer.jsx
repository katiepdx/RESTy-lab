// app logic
import React, { Component } from 'react'
import Controls from '../components/resty/controls/Controls'

export default class RestyContainer extends Component {
  // state - url, method, click, json
  state = {
    url: '',
    method: '',
    json: '',
    click: false
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ click: true })
  }

  render() {
    return (
      <>
        <h1>Resty Lab</h1>
        <div>
          Resty Container
          
          {/* form goes here */}
          <Controls onChange={this.handleChange} onClick={this.handleClick} />
        </div>
      </>
    )
  }
}
