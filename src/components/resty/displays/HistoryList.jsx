import React from 'react'
import propTypes from 'prop-types'
import HistoryItem from './HistoryItem'

const HistoryList = ({ history }) => {
  return history.map(search => (
    <p>
      <HistoryItem {...search} />
    </p>
  ))
}

HistoryList.propTypes = {
  // specify shape of data
  history: propTypes.arrayOf(propTypes.shape({
    url: propTypes.string.isRequired,
    method: propTypes.string.isRequired
  }))
}

export default HistoryList
