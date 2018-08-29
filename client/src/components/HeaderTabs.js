import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Tab, Tabs } from '@material-ui/core';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    height: 45,
  },
  tabs: {
    color: theme.palette.secondary.main,
  },
});

class HeaderTabs extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          className={classes.tabs}
          indicatorColor="secondary"
          centered
        >
          <Tab label="Home" />
          <Tab label="Portfolio" />
          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>
      </Paper>
    );
  }
}

export default withStyles(styles)(HeaderTabs);
