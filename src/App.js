import React, { Component } from 'react';
import './App.css';
import Userinput from "./user/userInput";
import Useroutput from  "./user/userOutput";

class App extends Component {
  state = {
    userName: "Harry Potter"
  }

  inputChangeHandler = (e) => {
    this.setState({userName: e.target.value});
  }
  render() {
    return (
      <div className="App">
        <h1>The Base Syntax</h1>
        <h3>Assignment 1</h3>
       <Userinput userName={this.state.userName}
       changed={this.inputChangeHandler.bind(this)}/>
       <Useroutput userName={this.state.userName} />
       <Useroutput userName="Harley Queen"/>
       <Useroutput userName="Joker"/>
      </div>
    );
  }
}

export default App;
