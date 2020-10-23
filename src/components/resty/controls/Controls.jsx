// url search bar - input field for URL
// radio buttons GET POST PUT DELETE
// input field for typing JSON for PUT POST
import React from 'react';
import propTypes from 'prop-types';
import styles from './Controls.css'

const Controls = ({ url, json, onChange, onClick }) => (
  <section className={styles.userForm}>
    <div>
      <label htmlFor="url">Search Bar</label>
      <input type="text" name="url" value={url} onChange={onChange} />
    </div>
    <div>
      <label htmlFor="method">Method</label>
      <input type="radio" name="method" value="GET" onChange={onChange} /> GET
      <input type="radio" name="method" value="POST" onChange={onChange} /> POST
      <input type="radio" name="method" value="PUT" onChange={onChange} /> PUT
      <input type="radio" name="method" value="DELETE" onChange={onChange} /> DELETE
    </div>
    <div>
      <label htmlFor="json">JSON (POST/PUT)</label>
      <input type="text" name="json" value={json} onChange={onChange} />
    </div>
    <button onClick={onClick}>Go!</button>
  </section>
);

Controls.propType = {
  url: propTypes.string.isRequired,
  json: propTypes.string,
  onChange: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired
};

export default Controls;
