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
  section: {
    marginBottom: 36,
  },
  cardContent: {
    padding: '0px 12%',
  },
});

function AboutFragment(props) {
  const { classes } = props;

  return (
    <Fragment>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline">
            About
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="https://reactjs.org/logo-og.png"
          title="ReactJS"
        />
        <CardContent className={classes.cardContent}>
          <div className={classes.section}>
            <Typography variant="headline">
              Introduction
            </Typography>
            <br />
            <Typography variant="body1">
              Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
              Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
            </Typography>
          </div>
          <div className={classes.section}>
            <Typography variant="headline">
              Mission
            </Typography>
            <br />
            <Typography variant="body1">
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. 
            </Typography>  
          </div>
          <div className={classes.section}>
            <Typography variant="headline">
              Team
            </Typography>       
            <br /> 
          </div>
        </CardContent>
      </Card>
    </Fragment>
  )
}

export default withStyles(styles)(AboutFragment);
