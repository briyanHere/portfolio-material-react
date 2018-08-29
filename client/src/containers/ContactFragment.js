import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';


const styles = theme => ({
  card: {
    height: '100vh',
  },
  media: {
    height: '40%',
    marginBottom: 36,
  },
  cardContent: {
    padding: '0px 20%',
  },
});

function ContactFragment(props) {
  const { classes } = props;

  return (
    <Fragment>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline">
            Contact
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="https://reactjs.org/logo-og.png"
          title="ReactJS"
        />
        <CardContent className={classes.cardContent}>
          
        </CardContent>
      </Card>
    </Fragment>
  )
}

export default withStyles(styles)(ContactFragment);
