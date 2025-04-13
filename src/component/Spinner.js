import React, { Component } from 'react';
import loading from './loading.gif';

export class Spinner extends Component {
  render() {
    return (
      <div style={spinnerStyle}>
        <img src={loading} alt="loading..." style={{ width: '50px', height: '50px' }} />
      </div>
    );
  }
}

const spinnerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',             // Full viewport height
  width: '100vw',              // Full viewport width
  position: 'fixed',           // Keep the spinner in a fixed position
  top: '0',
  left: '0',
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Semi-transparent background
  zIndex: '9999',              // Ensure spinner stays on top of other elements
};

export default Spinner;
