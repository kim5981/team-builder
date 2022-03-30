import './App.css';
import Form from "./Form"

import React, { useState } from "react"

function TeamMember (props) {
  const { person} = props

  if ( !person ) {
      return <h2>loading info..</h2>
  }

  return (
      <div className="person-wrapper">
          <h2> { person.name } </h2>
          <div className="person-info">
          <p> Email: { person.email } </p>
          <p>role: { person.role }</p>
          </div>
      </div>
  )
}


function App() {

  //* set state
  const initialValues = {
    name: "",
    email: "",
    role: ""
  }

  const [ members, setMembers ] = useState([]);
  const [ formValues, setFormValues ] = useState(initialValues)
  const [ error, setError ] = useState("");

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

  if ( !formData.name || !formData.email || !formData.role ) {
    setError( "enter all data" );
    setFormValues(initialValues);
    return;
  } else if ( !formData.name ) {
    setError( "enter a name" );
    setFormValues(initialValues);
    return;
  } 
  else if ( !formData.email ) {
    setError( "enter an email " );
    setFormValues(initialValues)
    return;
  } else if ( !formData.role ) {
     setError( "select a role" );
     return;
  }


  }

  return (
    <div className="app-wrapper">
        <h1>uwu inc.</h1>
        { error && <p className="error"> { error } </p> }
        <Form values={ formValues } update={ updateForm } submit={ submit }/>
    </div>
  );
}

export default App;
