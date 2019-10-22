import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWorking: true
    };
  }

  workingClick = () => {
    this.setState({ isWorking: !this.state.isWorking });
  };

  render() {
    const homer = this.state.isWorking ? 'Working' : 'Taking a break';
    const newHeader = this.state.isWorking ? 'App-header' : 'App-header-stop';

    return (
      <div className="App">
        <header className={newHeader}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button onClick={this.workingClick}
          className={homer}>
          {homer.toUpperCase()}
          </button>
        </header>
        <Lamp on />
        <Lamp />
        <Quotes
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quotes
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
      </div>
    );
  }
}

export default App;