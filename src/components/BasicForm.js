import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";

function BasicForm() {

  const navigate = useNavigate();

let {constextState, setContextState}= useContext(MyContext)

  const [name, setName] = useState("");
  const [id, setId] = useState('');

  const handleChange = (event) => {
    const value = event.target.value
      setName(value);
      setContextState({...constextState,name:value});
      localStorage.setItem("name", value);
  };

   const handleId = (event) => {
     const value = event.target.value;
     setId(value);
     setContextState({ ...constextState,id: value });
    localStorage.setItem("id", value);
   };

  const handleSubmit = (event) => {
   event.preventDefault();
   navigate('/about')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="id">
        Id:
        <input type="number" value={id} onChange={handleId} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicForm;
