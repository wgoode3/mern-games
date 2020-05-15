import React from 'react';
import Games from './Components/Games'; 
import Form from './Components/Form'; 
import Edit from './Components/Edit'; 
import { Router, Link } from '@reach/router';


function App() {
  return (
    <div>
      <Link to="/">All Games</Link>&nbsp;|&nbsp;
      <Link to="/new">New Game</Link>
      <Router>
        <Games path="/" />
        <Form path="/new" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
