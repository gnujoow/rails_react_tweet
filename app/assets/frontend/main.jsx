import { Router, Route, Link, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

import Index from './component/Index';
import Follow from './component/Follow';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

let documentReady = () =>{
  let reactNode = document.getElementById('main');
  if(reactNode) {
    ReactDOM.render(
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/" component={Index} />
          <Route path="/follow" component={Follow} />
        </Route>
      </Router>
    ,reactNode);
  }
};

$(documentReady);
