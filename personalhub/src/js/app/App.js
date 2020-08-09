import React from 'react';
import logo from '../../resources/logo/logo.svg';
import '../../css/App.scss';
import Header from '../app/Header';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
