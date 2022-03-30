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
  const [error, setError] = useState("");

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

  if ( !formValues.name ) {
    setError( "enter a username" );
    return;
  } else if ( !formValues.email ) {
    setError( "enter an email " );
    return;
  } else if ( !formValues.role ) {
     setError( "select a role" );
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
