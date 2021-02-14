import React from 'react'
import { Route, Switch } from 'react-router';
import NavBar from "../components/navbar";
import Home from "../components/pages/Home";
import Sorting from "../components/Sorting";
import BubbleSort from "../components/Sorting/BubbleSort";
import SelectionSort from "../components/Sorting/SelectionSort";
import QuickSort from "../components/Sorting/QuickSort";
import MergeSort from "../components/Sorting/MergeSort";

export const path = (path) => {
    console.log(path, )
    if(process.env.NODE_ENV === "development"){
        return path
    }
    return process.env.PUBLIC_URL + path;
}

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path={path("/")} label="Home" component={Home} />
      <Route path={path('/sorting/merge-sort')} component={MergeSort} />
      <Route path={path('/sorting/quick-sort')} component={QuickSort} />
      <Route path={path('/sorting/selection-sort')} component={SelectionSort} />
      <Route path={path('/sorting/bubble-sort')} component={BubbleSort} />
      <Route path={path('/sorting')} component={Sorting} />
    </Switch>
  </div>
)

export default routes