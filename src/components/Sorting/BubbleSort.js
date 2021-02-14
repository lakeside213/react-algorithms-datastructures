import React, { Fragment, useState } from 'react';

import BaseContainer from "./Container";

import { useSelector } from 'react-redux';
import Order from "./order";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

export default function BubbleSort() {
  const order  = useSelector(state => state.order.order);
  const [elements, setElements] = useState("");
  const [appLog, setAppLog] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);

  const onClick= ()=> {
    setAppLog([]);
    setSortedArray([]);
    const arr = elements.split(",");
    console.log(arr);
    bubbleSort(arr);
    
  }
  const handleChange= (event)=> {
    const ele = event.target.value;
    ele.trim();
    setElements(ele);
    
    console.log(ele)
}


function bubbleSort (inputArr){
    let len = inputArr.length;
    let swapped;
    let index = 1;
    let log = [];
    do {
        swapped = false;
        let message = `${index} iteration ${inputArr.toString()}`;
        index++;
        log.push(message);
        for (let i = 0; i < len; i++) {
            if(order === "ascending"){
                if (inputArr[i] > inputArr[i + 1]) {
                    message = `swapped ${inputArr[i]} with ${inputArr[i+1]}`;
                    log.push(message);
                    let tmp = inputArr[i];
                    inputArr[i] = inputArr[i + 1];
                    inputArr[i + 1] = tmp;
                    swapped = true;
                    message = `result: ${inputArr.toString()}`;
                    log.push(message);
                }else{
                    message = `${inputArr[i]} is smaller than ${inputArr[i+1]}, no change`;
                    log.push(message);
                }
            }else{
                if (inputArr[i] < inputArr[i + 1]) {
                    message = `swapped ${inputArr[i]} with ${inputArr[i+1]}`;
                    log.push(message);
                    let tmp = inputArr[i];
                    inputArr[i] = inputArr[i + 1];
                    inputArr[i + 1] = tmp;
                    swapped = true;
                    message = `result: ${inputArr.toString()}`;
                    log.push(message);
                }else{
                    message = `${inputArr[i]} is bigger than ${inputArr[i+1]}, no change`;
                    log.push(message);
                }
            }
            
        }
    } while (swapped);
    setAppLog(appLog => appLog.concat(log));
    setSortedArray(sortedArray => sortedArray.concat(inputArr));

};


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