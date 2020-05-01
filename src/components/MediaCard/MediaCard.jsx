import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import styles from './MediaCard.module.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    marginBottom: 25
  },
  media: {
    height: 350,
  },
});

const MediaCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://covid19.mathdro.id/api/og"
          title="Covid-19 Data"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Global 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Serving data from John Hopkins University CSSE as a JSON API.  For mor information please click on Learn More.  Data in this graphic lags information above.  Check last updated. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" href="https://github.com/mathdroid/covid-19-api">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard