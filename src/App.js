import React , { Component } from "react";
import "./App.css";
import InputUser from './components/inputUser/InputUser'
import OutputUser from './components/outputUser/OutputUser'

class App extends Component {
  state = {
    name: 'rizky'
  }

  changeNameHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render(){
  return (
    <div className="App">
      <InputUser change={this.changeNameHandler} currentName={this.state.name} />
      <OutputUser name={this.state.name} />
      <OutputUser name={this.state.name} />
    </div>
  );
}
}

export default App;
