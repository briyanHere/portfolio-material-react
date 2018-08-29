import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: 200,
    paddingTop: 150,
  },
});


function HeaderBanner(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Typography variant="headline" align="center" color="secondary">
        Material Design Portfolio
      </Typography>
    </Paper>
  )
}

export default withStyles(styles)(HeaderBanner);
