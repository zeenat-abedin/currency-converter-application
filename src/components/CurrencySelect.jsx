import PropTypes from 'prop-types';

function CurrencySelect({ value, onChange, currencies }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {currencies.map(([code, name]) => (
        <option key={code} value={code}>
          {code} - {name}
        </option>
      ))}
    </select>
  );
}

CurrencySelect.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  currencies: PropTypes.array,
};

export default CurrencySelect;