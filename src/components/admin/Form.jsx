import React, { useState } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react-refresh/only-export-components
export const FormContext = React.createContext({
  form: {},
  handleFormChange: () => {}
});


export default function Form(props) {

  const { children, submit = () => {}, initialValues } = props;

  const [form, setForm] = useState(initialValues);

  const handleFormChange = (event) => {
    // Get the name of the field that caused this change event
    // Get the new value of this field
    const { name, value } = event.target;
    //console.log(event.target);
    
    // Update state
    // Assign new value to the appropriate form field
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <form className="Form" encType="multipart/form-data">
      <FormContext.Provider value={{
        form,
        handleFormChange
      }}>
        {children}
      </FormContext.Provider>

      <button type="button" className="btn btn-primary mr-2" onClick={() => submit(form)}>
        Submit
      </button>
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.func,
  initialValues: PropTypes.object
};

