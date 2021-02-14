import React from 'react'
import { Route, Switch } from 'react-router';
import NavBar from "../components/navbar";
import Home from "../components/pages/Home";
import Sorting from "../components/Sorting";
import BubbleSort from "../components/Sorting/BubbleSort";

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" label="Home" component={Home} />
     
      <Route path='/sorting/bubble-sort' component={BubbleSort} />
      <Route path="/sorting" label="Sorting" component={Sorting} />
      
     
      
    </Switch>
  </div>
)

export default routes