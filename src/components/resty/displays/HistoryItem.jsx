import React from 'react';
import propTypes from 'prop-types';

const HistoryItem = ({ url, method }) => (
  <section>
    {/* search history */}
    <p>{method} || {url}</p>
  </section>
);

HistoryItem.propType = {
  url: propTypes.string.isRequired,
  method: propTypes.string.isRequired
};

export default HistoryItem;
