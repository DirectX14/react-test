import React, { Component } from 'react';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

function Hello(props){
  return (
    <h1> Hello {props.name}! </h1>
  )
}

class App extends Component {
  render() {
    return (
      <Hello name="World" />
    );
  }
}

export default App;
