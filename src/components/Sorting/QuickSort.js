import React, { Fragment, useState } from 'react';

import BaseContainer from "./Container";

import { useSelector } from 'react-redux';
import { isNumeric } from "./utils/helpers";
import Order from "./order";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';


//TODO. QUICKSORT
export default function QuickSort() {
  const order  = useSelector(state => state.order.order);
  const [elements, setElements] = useState("");
  const [appLog, setAppLog] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);

  const onClick= ()=> {
    setAppLog([]);
    setSortedArray([]);
   
    let arr = elements.split(",");
    let parsedArr = arr.map(function(element) { 
        element.trim();
        console.log(element, isNumeric(element));
        if(isNumeric(element)){
            return parseInt(element);
        }
        return element;
      });
      let log = [];
      
      parsedArr = quickSort(parsedArr, 0 , parsedArr.length - 1, log);
      let message = `The array after iteration is ${parsedArr.toString()}`;
      log.push(message);
      setAppLog(appLog => appLog.concat(log));
    
  }
  const handleChange= (event)=> {
    const ele = event.target.value;
    ele.trim();
    setElements(ele);
    
    console.log(ele)
}

function swap(items, leftIndex, rightIndex,log){
    let message = `Swap ${items[leftIndex]} with ${items[rightIndex]}`;
    log.push(message);
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    message = items.toString();
    log.push(message);
    
}
function partition(items, left, right, log) {
    let message;
    message = `The array before manipulation is ${items.toString()}`;
    log.push(message);
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    message = `The pivot is ${pivot}`;
    log.push(message);
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j, log); //sawpping two elements
            i++;
            j--;
        }
    }

    message = `The array after manipulation is ${items.toString()}`;
    log.push(message);
    return i;
}

function quickSort(items, left, right, log) {
    var index;
    let message;
    if (items.length > 1) {
        index = partition(items, left, right, log); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            message = `Left array ${items.toString()}`;
            log.push(message);
            quickSort(items, left, index - 1, log);
        }
        if (index < right) { //more elements on the right side of the pivot
            message = `Right array ${items.toString()}`;
            log.push(message);
            quickSort(items, index, right, log);
        }
    }
    
    return items;
}






  return (
    <BaseContainer>
        <Order />
        <TextField
            id="standard-number"
            label="Enter elements with ,"
            onChange={handleChange}
        />
        <Button onClick={onClick} variant="contained">Sort</Button>

    <List subheader={<Typography variant="h4">
        Steps
      </Typography>}>
        {appLog.map((step, index) => (
        step.includes("iteration") ? <ListSubheader key={index}>{step}</ListSubheader> : <ListItem divider key={index}><ListItemText  primary={step} /></ListItem>
         
        ))}
    </List>
    <Typography variant="h5">
        Answer is {sortedArray.toString()}
      </Typography>
    </BaseContainer> 
  );
}




