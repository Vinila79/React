// src/CurrencyConverter.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import styles from './CurrencyConverter.module.css';
import styles from './cs.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [currencies, setCurrencies] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(1);

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await axios.get('https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD');
        setCurrencies(Object.keys(response.data.conversion_rates));
        setExchangeRate(response.data.conversion_rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching currencies", error);
      }
    };

    getCurrencies();
  }, [toCurrency]);

  const convertCurrency = async () => {
    try {
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/pair/${fromCurrency}/${toCurrency}`);
      setExchangeRate(response.data.conversion_rate);
    } catch (error) {
      console.error("Error fetching conversion rate", error);
    }
  };

  useEffect(() => {
    convertCurrency();
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleFromCurrencyChange = (e) => setFromCurrency(e.target.value);
  const handleToCurrencyChange = (e) => setToCurrency(e.target.value);

  const convertedAmount = (amount * exchangeRate).toFixed(2);

  return (
    <div className={styles.container}>
      <h2>Currency Converter</h2>
      <div className={styles.converter}>
        <input type="number" value={amount} onChange={handleAmountChange} />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          {currencies.map((currency, index) => (
            <option key={index} value={currency}>{currency}</option>
          ))}
        </select>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          {currencies.map((currency, index) => (
            <option key={index} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <h3>{amount} {fromCurrency} = {convertedAmount} {toCurrency}</h3>
    </div>
  );
};

export default CurrencyConverter;
