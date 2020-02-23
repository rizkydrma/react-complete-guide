import React from 'react'

export default function CharComponent(props) {

  const style = {
    display: 'inline-block',
    padding: '1rem',
    border: '1px solid #ccc',
    margin: '1rem'
  }

  return (
    <div style={style} onClick={props.click}> 
      {props.char}
    </div>
  )
}
