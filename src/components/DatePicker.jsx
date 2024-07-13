import PropTypes from 'prop-types';

function DatePicker({ value, onChange }) {
  return (
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

DatePicker.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default DatePicker;