import React from 'react';
import './App.css';
import TestComponent from './Components/R003';

function App() {
  return (
    <>
    <div className="App">
      <h1>Start React 200!</h1>
      <p>css 적용하기</p>
      <TestComponent prop_value = 'FromApp.js' />
    </div>
    </>
  );
}

export default App;
