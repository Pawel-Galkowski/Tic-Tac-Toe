import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TicTacToe from './components/TicTacToe';
import './stylesheets/App.css';

function App() {
  return (
    <div>
      <h1 className="headerStyle">Tic Tac Toe</h1>
      <Router>
        <Route component={TicTacToe} />
      </Router>
    </div>
  );
}

export default App;
