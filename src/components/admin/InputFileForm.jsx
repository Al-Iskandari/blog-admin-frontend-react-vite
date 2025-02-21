import {useContext} from 'react';
import {FormContext} from './Form';
import PropTypes from 'prop-types'

function InputFileForm(props) {
  
const {
  label, 
  type = 'file',
  innerRef,
  name,
  className = 'form-control',
  placeholder = label} = props;

  const formContext = useContext(FormContext);
  const { handleFormChange } = formContext;

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        className={className}
        name={name}
        ref={innerRef}
        placeholder={placeholder}
        onChange={handleFormChange}
      />
      <div className="input-group col-xs-12">
        <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image" />
        <span className="input-group-append">
          <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
        </span>
      </div>
    </div>
  );
}

InputFileForm.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputFileForm;