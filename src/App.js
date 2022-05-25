import React from "react";
import './App.css';
import Content from "../src/common/Index";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Content />
      </Router>
    </div>
  );
}

export default App;
