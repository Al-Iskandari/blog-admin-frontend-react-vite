import {useContext} from 'react';
import {FormContext} from './Form';
import PropTypes from 'prop-types'

function InputForm(props) {
  
const {
  label, 
  type = 'text',
  name,
  min= 0,
  max=100,
  className = 'form-control',
  placeholder = label} = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;
  const currentValue = type==="range" ? form[name] : '';

  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="slider-range">
        <input
          type={type}
          className={className}
          name={name}
          value={form[name]}
          min={min}
          max={max}
          placeholder={placeholder}
          onChange={handleFormChange}
        />
        {
          type==="range" && <output>{currentValue}</output>
        }
      </div>
    </div>
  );
}

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  className: PropTypes.string,
  placeholder: PropTypes.string,

};

export default InputForm;