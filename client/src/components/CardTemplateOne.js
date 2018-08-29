import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';


const styles = theme => ({
  card: {
    height: 400,
  },
  media: {
    height: '50%',
  },
});

function CardTemplateOne(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
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
  )
}

export default withStyles(styles)(CardTemplateOne);
