import React from "react";

export default function OutputUser(props) {
  const CardUser = {
    margin: '1rem 10rem',
    border: '1px solid #ccc',
    boxShadow: '0 2px 3px #aaa'
  }
  return (
    <div style={CardUser}>
      <p>My Name is {props.name} </p>
      <p>Biodata ku ya!!</p>
    </div>
  );
}
