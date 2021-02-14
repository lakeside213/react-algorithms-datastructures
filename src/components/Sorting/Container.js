import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Order from "./order";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      display: "flex",
    },
  }));


export default function BaseContainer({ children }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}