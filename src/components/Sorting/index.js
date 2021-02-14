import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import NavLink from "../NavLink";
import { useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Home() {
  const classes = useStyles();
  let url = 'sorting';
  return (
    <List
      component="nav"
      className={classes.root}
    >
        
        <NavLink pathname="Bubble Sort" path={`${url}/bubble-sort`} />
        <NavLink pathname="Selection Sort" path={`${url}/selection-sort`} />
        <NavLink pathname="Quick Sort " path={`${url}/quick-sort`} />
        <NavLink pathname="Insertion Sort" path={`${url}/insertion-sort`} />
        <NavLink pathname="Merge Sort" path={`${url}/merge-sort`} />

           
              
    </List>
  );
}