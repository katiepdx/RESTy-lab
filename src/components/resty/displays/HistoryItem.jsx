import React from 'react';
import propTypes from 'prop-types';
import styles from './HistoryItem.css'

const HistoryItem = ({ url, method }) => (
  <section className={styles.historyItem}>
    {/* search history */}
    <p>Method: {method}</p>
    <p>URL: {url}</p>
  </section>
);

HistoryItem.propType = {
  url: propTypes.string.isRequired,
  method: propTypes.string.isRequired
};

export default HistoryItem;
