import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  let history = useHistory();
  const classes = useStyles();
  const goToPreviousPath = () => {
    history.goBack()
  }
  const hasPreviousRoute = () => {
      return history.state.prevRoute;
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            {
                hasPreviousRoute ?  
                    <IconButton onClick={goToPreviousPath} edge="start" className={classes.backButton} color="inherit" aria-label="back">
                        <ArrowBack />
                    </IconButton> : ""
                
            }
          
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}