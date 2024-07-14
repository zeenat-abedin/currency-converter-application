import { useState, useEffect } from 'react';
import CurrencySelect from './CurrencySelect';
import DatePicker from './DatePicker';
import { fetchCurrencies, convertCurrency } from '../api/exchangeRates';
import './CurrencyConverter.css';

function CurrencyConverter() {
  const [isLoading, setIsLoading] = useState(false); 
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    setIsLoading(true); 
    fetchCurrencies()
      .then((data) => {
        setCurrencies(data);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error("Failed to fetch currencies:", error);
        setIsLoading(false); 
      });
  }, []);

  const handleConvert = async () => {
    const result = await convertCurrency(amount, fromCurrency, toCurrency, date);
    setConvertedAmount(result);
  };

  return (
    <div className="container"> 
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    <div className="currency-select">
      <CurrencySelect
        value={fromCurrency}
        onChange={setFromCurrency}
        currencies={currencies}
      />
      <CurrencySelect
        value={toCurrency}
        onChange={setToCurrency}
        currencies={currencies}
      />
    </div>
    <DatePicker value={date} onChange={setDate} />
    <button onClick={handleConvert}>Convert</button>
      <p>
        {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
      </p>
       {isLoading && <p>Loading currencies...</p>}
    </div>
  );
}

export default CurrencyConverter;