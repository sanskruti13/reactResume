import React from 'react';
import Sidebar from './components/sidebar';
import Content from './components/content';
import './App.css'; 

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
