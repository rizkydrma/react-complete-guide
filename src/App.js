import React , { Component } from "react";
import "./App.css";
import Validation from './components/Validation'
import CharComponent from './components/CharComponent'

class App extends Component {

  state = {
    text : ''
  }
  
  inputUserHandler = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  deleteCharHandler = (charIndex) => {
    const text = [...this.state.text]
    text.splice(charIndex, 1)
    this.setState({
      text: text.join('')
    })
  }

  render(){
  
  const charList = this.state.text.split('').map((char, index) => {
    return <CharComponent char={char} key={index} click={this.deleteCharHandler.bind(this, index)} />
  })
  return (
    <div className="App">
      <input type="text" onChange={this.inputUserHandler} value={this.state.text} />
      <p>{this.state.text}</p>
      <Validation textLength={this.state.text.split('').length} />
      {
        charList
      }
    </div>
  );
}
}

export default App;
