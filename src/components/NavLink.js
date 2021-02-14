import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from "react-router-dom";
import { path } from "path";



export default function NavLink({pathname, path, hasPrevRoute=false}) {
  let history = useHistory();
  const goToPath = () => {
    history.push(path(path), { prevRoute: hasPrevRoute })
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