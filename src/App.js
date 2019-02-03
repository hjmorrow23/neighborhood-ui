import React, { Component } from 'react';
import './App.css';
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';

const theme = {
  white: '#fff',
  primary: '#1aa130',
  primaryHover: "#137523",
  secondary: '#ffb400',
  text: "#333",
  agentBorder: "#666"
};

class App extends Component {
  
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Hero />
          <Content />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
