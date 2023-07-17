import React from "react";
import { useUserContext } from "../context/userContext";

export const ComponentTwo = () => {


 const {userInout} = useUserContext()


  return (
    <>
      <h1>Component 2</h1>
      <div>
        <p>Updated data on input</p>
        <p>{userInout}</p>
      </div>
      <hr />
    </>
  );
};
