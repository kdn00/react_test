import React from 'react';
import './App.css';
import TestComponent from './Components/TestComponent';
import ES6 from './Components/ES6';
import Variable from './Components/Variable';

function App() {
  return (
    <>
    <div className="App">
      <h1>Start React 200!</h1>
      <p>css 적용하기</p>
      <TestComponent prop_value = 'FromApp.js' />
      <ES6 />
      <Variable />
    </div>
    </>
  );
}

export default App;
