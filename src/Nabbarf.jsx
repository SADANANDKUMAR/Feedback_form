import React from "react";
import { useState } from "react";
import './App.css';
const Navfunc =() =>{
const [btnState, setBteState] = useState(false);

function  handleClick() {
 setBteState(btnState => !btnState)
  }

  let toggleClassCheck = btnState ? ' active' : null
    return(
        <>
         <button 
         className={`btn${toggleClassCheck}`}
         onClick={handleClick}>
            Toggle Class 
         </button>
        </>
    );
}


export default Navfunc;