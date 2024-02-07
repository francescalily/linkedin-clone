import React from 'react';
import './App.css';
//control spacebar gives us automatic import
import { Header, SideBar } from './components';


function App() {
  return (
    <div className="app">
     <Header />
     <div className="app__body">
      <SideBar />
       {/* App Body */}
      {/* Feed */}
      {/* Widgets */}
     </div>
     
    </div>
  );
}

export default App;
