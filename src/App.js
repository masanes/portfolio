import React, { Component } from 'react';
import Scramble from 'react-scramble'
import styles from './mystyle.module.css'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { Portfolio } from './Portfolio';
import { NoMatch } from './NoMatch';
import Sidebar from './components/Sidebar';
import './App.css';


class App extends Component {
  render() {
    return (
  <React.Fragment>
    <Router>
      <Sidebar />
    <NavigationBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route component={NoMatch} />
    </Switch>
    </Router>
   

    </React.Fragment>
    )
  }
}

export default App



