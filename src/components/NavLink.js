import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from "react-router-dom";
import { path as getPath } from "../routes/index";



export default function NavLink({pathname, path, hasPrevRoute=false}) {
  let history = useHistory();
  const goToPath = () => {
    const url = getPath(path);
    history.push(url, { prevRoute: hasPrevRoute })
  }

  return (
            <ListItem 
                onClick={() => {
                    goToPath()
                }}
                divider 
            button>
                <ListItemText primary={pathname} />
            </ListItem> 
  );
}