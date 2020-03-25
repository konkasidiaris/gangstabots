import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  }
});

export default function RoboCard({name,email,id}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={`https://robohash.org/${id}?200x200`}
          title={`a robot named ${name}`}
        />
        <CardContent>
          <Typography align='center' gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography align='center' variant="body2" color="textSecondary" component="p">
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
