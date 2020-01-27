import React from 'react';
import { BrowserRouter, } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

// import Button from '@material-ui/core/Button'
// import Pricing from './templates/Pricing'

import RootRouter from './routers/RootRouter'

function App() {
  return (
    <BrowserRouter>
      <RootRouter/>
    </BrowserRouter>
  )
}

export default App;
