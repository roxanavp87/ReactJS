import React, { Component } from 'react';
import './App.css';
import News from "./News/News.js";
import SearchAppBar from './Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchAppBar />
        <header className="App-header">
          <p>
            My feed.
          </p>
          <News />
        </header>
      </div>
    );
  }
}

export default App;
