import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';
import { AboutFragment, ContactFragment, HeaderFragment, HomeFragment, PortfolioFragment } from './containers';

const styles = theme => ({
  main: {
    padding: '20px 25%'
  }
})

class App extends Component {
  
  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        <Fragment>
          <HeaderFragment />
          <main className={classes.main}>
            <Switch>
              <Route exact path="/Home" component={HomeFragment} />
              <Route exact path="/Portfolio" component={PortfolioFragment} />
              <Route exact path="/About" component={AboutFragment} />
              <Route exact path="/Contact" component={ContactFragment} />
              <Route component={() => <Redirect to="/Home" />} />
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default withRoot(withStyles(styles)(App));
