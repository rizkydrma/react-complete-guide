import React from 'react'

export default function Validation(props) {
  let resultText = null
  if(props.textLength <= 5){
    resultText = (
      <div>
        
      <p> Text terlalu pendek </p>
      <p>{props.textLength}</p>
      </div>
    )
  }else{
    resultText = (
      <p>Teks Bagus</p>
    )
  }
  return (
    <div>
      {resultText}
    </div>
  )
}
