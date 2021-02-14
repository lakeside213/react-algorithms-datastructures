import React from "react";
import { ConnectedRouter as Router } from 'connected-react-router';
import routes from './routes';

const App = ({ history }) => {
  console.log(process.env.PUBLIC_URL, process.env)
  return (
    <Router history={history}>
      { routes }
    </Router>
  )
}


export default App;
