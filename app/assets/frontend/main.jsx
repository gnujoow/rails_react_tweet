import React from 'react';
import ReactDOM from 'react-dom';
import Index from './component/Index';

let documentReady = () =>{
  let reactNode = document.getElementById('main');
  if(reactNode) {
    ReactDOM.render(
        <Index />,
        document.getElementById('main')
    );
  }
};

$(documentReady);
