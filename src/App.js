import React from 'react';
import './Style/App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat'

function App() {
  return (
    <div className="app">
      <h1>CheezApp </h1>

      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;


// Video at 2:08:31
// https://www.youtube.com/watch?v=pUxrDcITyjg