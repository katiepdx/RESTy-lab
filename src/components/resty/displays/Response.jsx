import React from 'react';
import propTypes from 'prop-types';
import ReactJson from 'react-json-view'

const Response = ({ apiResponse }) => (
  <section>
    <ReactJson src={apiResponse} />
  </section>
);

Response.propType = {
  apiResponse: propTypes.object.isRequired
};

export default Response;
