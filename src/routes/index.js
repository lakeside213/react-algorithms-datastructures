import React from 'react'
import { Route, Switch } from 'react-router';
import NavBar from "../components/navbar";
import Home from "../components/pages/Home";
import Sorting from "../components/Sorting";
import BubbleSort from "../components/Sorting/BubbleSort";

export const path = (path) => {
    console.log(path, )
    if(process.env.NODE_ENV == "development"){
        return path
    }
    return process.env.PUBLIC_URL +"/";
}

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path={path("/")} label="Home" component={Home} />
      <Route path={path('/sorting/bubble-sort')} component={BubbleSort} />
      <Route path={path('/sorting')} component={Sorting} />
      
     
      
    </Switch>
  </div>
)

export default routes