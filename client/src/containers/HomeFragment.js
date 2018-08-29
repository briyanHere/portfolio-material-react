import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import { Card, CardContent, CardMedia, Divider } from '@material-ui/core';

const styles = theme => ({
  row: {
    paddingBottom: 32, 
  },
  rowOne: {
    height: 425,
  },
  rowTwo: {
    height: 200,
  },
  rowThree: {
    height: 406,
  },
  divider: {
    margin: '0px -10%',
  },
  mediaOne: {
    height: '75%'
  },
  mediaTwo: {
    height: '100%',
  },
  mediaThree: {
    height: 190,
  },
  button: {
    color: theme.palette.secondary.light,
  },
});

function HomeFragment(props) {
  const { classes } = props;

  return (
    <Fragment>
      <Grid container spacing={24} justify="center">
        <Grid item xs={12} className={classes.row}>
          <Card className={classes.rowOne}>
            <CardMedia
              className={classes.mediaOne}
              image="https://reactjs.org/logo-og.png"
              title="ReactJS"
            />
            <CardContent>
              <Typography variant="subheading">
                Recreation of Material Design Portfolio Template https://templateflip.com/demo/?template=material-portfolio
              </Typography>
              <Divider className={classes.divider} />
              <Button className={classes.button}>
                Download
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid container xs={12} spacing={24} className={classes.row}>
          <Grid item xs={3}>
            <Card className={classes.rowTwo}>
              <CardMedia
                className={classes.mediaTwo}
                image="https://reactjs.org/logo-og.png"
                title="ReactJS"
              />
            </Card>
          </Grid>
          <Grid item xs={9}>
            <Card className={classes.rowTwo}>
              <CardContent>
                <Typography variant="headline">
                  Introduction
                </Typography>
                <Typography variant="caption">
                  Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. 
                </Typography>
                <Divider className={classes.divider}/>
                <Button className={classes.button}>
                  Watch Intro
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container xs={12} spacing={24} className={classes.row}>
          <Grid item xs={4}>
            <Card className={classes.rowThree}>
              <CardMedia
                className={classes.mediaThree}
                image="https://reactjs.org/logo-og.png"
                title="ReactJS"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  ReactJS
                </Typography>
                <Typography>
                  Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.rowThree}>
              <CardMedia
                className={classes.mediaThree}
                image="https://cdn-images-1.medium.com/max/1687/1*FDNeKIUeUnf0XdqHmi7nsw.png"
                title="Material-Ui"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Material-UI
                </Typography>
                <Typography>
                  Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.rowThree}>
              <CardMedia
                className={classes.mediaThree}
                image="https://maxcdn.icons8.com/app/uploads/2016/03/material-1-1000x563.jpg"
                title="Material-Design"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Material Design
                </Typography>
                <Typography>
                  Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default withStyles(styles)(HomeFragment);
