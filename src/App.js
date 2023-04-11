import React from 'react';
import './App.css';
import TestComponent from './Components/TestComponent';
import ES6 from './Components/ES6';

function App() {
  return (
    <>
    <div className="App">
      <h1>Start React 200!</h1>
      <p>css 적용하기</p>
      <TestComponent prop_value = 'FromApp.js' />
      <ES6 />
    </div>
    </>
  );
}

export default App;
