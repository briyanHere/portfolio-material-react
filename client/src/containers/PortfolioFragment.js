import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { CardTemplateOne } from '../components';

const styles = theme => ({
  root: {

  }
})

function PortfolioFragment(props) {
  // const { classes } = props;

  return (
    <Fragment>
      <Grid container spacing={24}>
        {[0, 1, 2, 3, 4, 5].map(value => (
          <Grid key={value} item sm={4}>
            <CardTemplateOne />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  )
}

export default withStyles(styles)(PortfolioFragment);
