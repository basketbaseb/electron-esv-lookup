import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RecentPage from './content/RecentPage';
import TitleBar from './components/TitleBar';

class App extends Component {
  render() {
    return (
      <>
        <TitleBar />
        <Header />
        <Content id="main-content">
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App
