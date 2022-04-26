import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Background from './components/BACKGROUND/Background'
import Menu from './components/MENU/Menu';

ReactDOM.render(
  <React.Fragment>
    <Background />
    <Menu/>
  </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();
