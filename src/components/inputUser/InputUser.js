import React from "react";
import './InputUser.css'

export default function InputUser(props) {
  return (
    <div className="InputUser"> 
      <label>Input name someone here</label> <br/>
      <input type="text" onChange={props.change} value={props.currentName} />
    </div>
  );
}
