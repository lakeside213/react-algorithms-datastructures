import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from "react-router-dom";



export default function NavLink({pathname, path, hasPrevRoute=false}) {
  let history = useHistory();
  const goToPath = () => {
    history.push(path, { prevRoute: hasPrevRoute })
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