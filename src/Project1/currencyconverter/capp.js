// src/App.js

import React from 'react';
import CurrencyConverter from './currency';
import styles from './capp.module.css';

function CApp() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <CurrencyConverter />
      </header>
    </div>
  );
}

export default CApp;
