import React from 'react';
import './App.css';
// 1장 코드
// import TestComponent from './1장_Components/TestComponent';
// import ES6 from './1장_Components/ES6';
// import Variable from './1장_Components/Variable';
// import SpreadOperator from './1장_Components/SpreadOperator';
// import ClassPrototype from './1장_Components/ClassPrototype';
// import ArrowFunction from './1장_Components/ArrowFunction';
// import ForEach from './1장_Components/ForEach';
// import Map from './1장_Components/Map';
// import Jquery from './1장_Components/Jquery';

// 2장 코드
import Props from './2장_Components/Props';

function App() {
  return (
    <>
    <div className="App">
      <h1>Start React 200!</h1>
      <p>css 적용하기</p>
      {/*
      <TestComponent prop_value = 'FromApp.js' />
      <ES6 />
      <Variable /> 
      <SpreadOperator />
      <ClassPrototype />
      <ArrowFunction />
      <ForEach />
      <Map />
      <Jquery />
      */}
      <Props props_value = "이건 props입니다. "/>
      
    </div>
    </>
  );
}

export default App;
