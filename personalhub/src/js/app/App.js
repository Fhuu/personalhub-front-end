import React from 'react';
import logo from '../../resources/logo/logo.svg';
import '../../css/App.scss';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
