import React from 'react';
import propTypes from 'prop-types';
import ReactJson from 'react-json-view'
import styles from './Response.css'

const Response = ({ apiResponse }) => (
  <section className={styles.response}>
    <ReactJson src={apiResponse} displayDataTypes={false} displayObjectSize={false}  theme="twilight" />
  </section>
);

Response.propType = {
  apiResponse: propTypes.object.isRequired
};

export default Response;
