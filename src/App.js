import React, { useState } from 'react';
import './Style/App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider'

function App(props) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">

      {!user ? (
        <Login />
      ) : (
      <div className="app__body">
        <Router>
            <Sidebar />

            <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
            
          </Switch>
        </Router>
      </div>
      )}
    </div>
  );
  
}

export default App;


// Video at 2:08:31
// https://www.youtube.com/watch?v=pUxrDcITyjg