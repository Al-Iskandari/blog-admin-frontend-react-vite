import {useContext} from 'react';
import {FormContext} from './Form';
import PropTypes from 'prop-types'

function SelectForm(props) {
  
const {
  data,
  label, 
  name,
  className = 'js-example-basic-single w-100'} = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <div className="form-group">
      <label>{label}</label>
      <select
        name={name}
        className={className}
        onChange={handleFormChange}>
        <option value={form[name]}>{form[name]?data[form[name]]:label}</option>
        {
          Object.entries(data).map(([key, item]) => (
            <option key={key} value={key}>{item}</option>
          ))
        }
      </select>
    </div>
  );
}

SelectForm.propTypes = {
  data: PropTypes.shape({
    key : PropTypes.number,
    value : PropTypes.string,
  }),
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SelectForm;