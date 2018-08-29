import React, { Component, Fragment } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';
import { HeaderFragment, HomeFragment } from './containers';


class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderFragment />
        <HomeFragment />
      </Fragment>
    );
  }
}

export default withRoot(withStyles({})(App));
