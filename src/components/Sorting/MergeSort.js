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

export default function MergeSort() {
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
    parsedArr = mergeSort(parsedArr, log);
    setAppLog(appLog => appLog.concat(log));
    setSortedArray(sortedArray => sortedArray.concat(parsedArr));
  }
  const handleChange= (event)=> {
    const ele = event.target.value;
    ele.trim();
    setElements(ele);
    
    console.log(ele)
}

// Merge Sort Implentation (Recursion)
function mergeSort (unsortedArray, log) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);
    let message;
    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    message = `Left array ${left.toString()}`;
    log.push(message);
    const right = unsortedArray.slice(middle);
    message = `Right array ${right.toString()}`;
    log.push(message);
  
    // Using recursion to combine the left and right
    return merge(mergeSort(left, log), mergeSort(right, log),log);
}

// Merge the two arrays: left and right
function merge (left, right, log) {
    let message;
    let resultArray = [], leftIndex = 0, rightIndex = 0;
    message = `left array ${left.toString()} and right array ${right.toString()}`;
    log.push(message);
    // We will concatenate values into the resultArray in order
    if(order === "ascending"){
        while (leftIndex < left.length && rightIndex < right.length) {
            message = `left array ${left.toString()} and right array ${right.toString()}`;
            if (left[leftIndex] < right[rightIndex]) {
            //   message = `${left[leftIndex]} from left array is smaller than ${right[rightIndex]} from right array`;
            //   log.push(message);
      
      
              resultArray.push(left[leftIndex]);
      
      
            //   message = `${left[leftIndex]} from left array is added to result, result:${resultArray.toString()}`;
            //   log.push(message);
              leftIndex++; // move left array cursor
            } else {
            //   message = `${right[rightIndex]} from right array is bigger than ${left[leftIndex]} from left array`;
            //   log.push(message);
      
              resultArray.push(right[rightIndex]);
      
            //   message = `${right[rightIndex]} from right array is added to result, result:${resultArray.toString()}`;
            //   log.push(message);
              rightIndex++; // move right array cursor
            }
          }
    }else{
        while (leftIndex < left.length && rightIndex < right.length) {
            message = `left array ${left.toString()} and right array ${right.toString()}`;
            if (left[leftIndex] > right[rightIndex]) {
            //   message = `${left[leftIndex]} from left array is bigger than ${right[rightIndex]} from right array`;
            //   log.push(message);
      
      
              resultArray.push(left[leftIndex]);
      
      
            //   message = `${left[leftIndex]} from left array is added to result, result:${resultArray.toString()}`;
            //   log.push(message);
              leftIndex++; // move left array cursor
            } else {
            //   message = `${right[rightIndex]} from right array is smaller than ${left[leftIndex]} from left array`;
            //   log.push(message);
      
              resultArray.push(right[rightIndex]);
      
            //   message = `${right[rightIndex]} from right array is added to result, result:${resultArray.toString()}`;
            //   log.push(message);
              rightIndex++; // move right array cursor
            }
          }
    }
    
    

    message = `After merge the array looks like ${resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))}`;
    log.push(message);
    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
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