import PropTypes from 'prop-types';
import 'currency-flags/dist/currency-flags.min.css';
import './CurrencySelect.css';

function CurrencySelect({ value, onChange, currencies }) {
  return (
    <div className="currency-select">
      <img
        src={`https://wise.com/public-resources/assets/flags/rectangle/${value.toLowerCase()}.png`}
        alt={`${value} flag`}
        className="currency-flag"
      />
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {currencies.map(([code, name]) => (
          <option key={code} value={code}>
            {code} - {name}
          </option>
        ))}
      </select>
    </div>
  );
}

CurrencySelect.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  currencies: PropTypes.array,
};

export default CurrencySelect;