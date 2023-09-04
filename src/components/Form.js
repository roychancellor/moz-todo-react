import React, { useState } from "react";

function Form(props) {
    // This defines a const whose name is "name" with a setter function ("hook") named "setName"
    // which sets the value of name. The function useState is a React function whose argument
    // is the value to which the state should be set.
    const [name, setName] = useState("");
  
    // Handler for changes in the text box when typing the name of a task
    function handleChange(e) {
        setName(e.target.value);
    }
    // Handler for form submission
    function handleSubmit(e) {
        // Disallow empty tasks
        if (name.length == 0) {
            props.addTask("ERROR: Tasks must be at least one character");
        }
        else {
            e.preventDefault();
            props.addTask(name); // the addTask function exists in App.js and is part of the props that App.js passes to Form.
        }
        setName("");
    }  

    return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
