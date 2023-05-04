import React from 'react';
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';

class App extends React.Component{
  render(){
    return (
      <div>
        <Sidebar/>
        <Main/>
      </div>
    );
  }
}

export default App;
