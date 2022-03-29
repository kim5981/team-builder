import './App.css';
import Form from "./Form"

import React, { useState } from "react"

function App() {

  //* set state
  const initialValues = {
    name: "",
    email: "",
    role: ""
  }

  const [formValues, setFormValues] = useState(initialValues)
  const [errors, setErrors] = useState(null);

  const updateForm = (inputName, inputValue) => {
    setFormValues(
      { ...formValues, [inputName]: inputValue }
    );
  }

  const submit = () => {

    const formData = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
  }

  if (!formValues.name || !formValues.email || !formValues.role) {
    setErrors("jfkdadak;");
    return;
  }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form values={ formValues } update={ updateForm } submit={ submit }/>
      </header>
    </div>
  );
}

export default App;
