import React, { useState, ChangeEvent, FormEvent } from "react";
import { useUserContext } from "../context/userContext";

export const ComponentOne = () => {
 // import the state update function from context
  const { setUserInput } = useUserContext();
  // Define a state to handle the value change
  const [inputValue, setInputValue] = useState(''); 

  // Specify e as a ChangeEvent<HTMLInputElement>
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Specify e as a FormEvent<HTMLFormElement>
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setUserInput(inputValue);
    setInputValue(''); 
  };

  return (
    <>
      <h1>Component 1</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="userInput" value={inputValue} onChange={handleChange} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <hr />
    </>
  );
};
