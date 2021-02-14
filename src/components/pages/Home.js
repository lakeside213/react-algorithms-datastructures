import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import NavLink from "../NavLink";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function Home() {
  const classes = useStyles();
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Click on a section
        </ListSubheader>
      }
      className={classes.root}
    >
        
        <NavLink pathname="Sorting" path="/sorting" hasPrevRoute={false} />
        {/* <NavLink pathname="Sorting" path="/sorting" hasPrevRoute={false} /> */}

           
              
    </List>
  );
}