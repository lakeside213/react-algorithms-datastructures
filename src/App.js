import React from "react";
import { ConnectedRouter as Router } from 'connected-react-router';
import routes from './routes';

const App = ({ history }) => {
  return (
    <Router history={history}>
      { routes }
    </Router>
  )
}


export default App;
