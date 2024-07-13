import axios from 'axios';

const API_KEY = '';
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

export const fetchExchangeRates = async (date) => {
  const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/USD`);
  return response.data.conversion_rates;
};

export const fetchCurrencies = async () => {
  const response = await axios.get(`${BASE_URL}/${API_KEY}/codes`);
  return response.data.supported_codes;
};

export const convertCurrency = async (amount, fromCurrency, toCurrency, date) => {
  const rates = await fetchExchangeRates(date);
  const fromRate = rates[fromCurrency];
  const toRate = rates[toCurrency];
  return (amount / fromRate) * toRate;
};