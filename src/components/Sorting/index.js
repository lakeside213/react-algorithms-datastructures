import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  let subpath = '/sorting';
  return (
    <List
      component="nav"
      className={classes.root}
    >
        
        <NavLink pathname="Bubble Sort" path={`${subpath}/bubble-sort`} />
        <NavLink pathname="Selection Sort" path={`${subpath}/selection-sort`} />
        <NavLink pathname="Quick Sort " path={`${subpath}/quick-sort`} />
        <NavLink pathname="Insertion Sort" path={`${subpath}/insertion-sort`} />
        <NavLink pathname="Merge Sort" path={`${subpath}/merge-sort`} />

           
              
    </List>
  );
}