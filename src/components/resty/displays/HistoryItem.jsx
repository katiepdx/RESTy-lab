import React from 'react';
import propTypes from 'prop-types';

const HistoryItem = ({ url, method }) => (
  <section>
    {/* search history */}
    <div>
      <p>{method}</p>
      <p>{url}</p>
    </div>
  </section>
);

HistoryItem.propType = {
  url: propTypes.string.isRequired,
  method: propTypes.string.isRequired
};

export default HistoryItem;
