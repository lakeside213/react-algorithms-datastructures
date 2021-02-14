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

export default function SelectionSort() {
  const order  = useSelector(state => state.order.order);
  const [elements, setElements] = useState("");
  const [appLog, setAppLog] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);

  const onClick= ()=> {
    setAppLog([]);
    setSortedArray([]);
   
    let arr = elements.split(",");
    const parsedArr = arr.map(function(element) { 
        element.trim();
        console.log(element, isNumeric(element));
        if(isNumeric(element)){
            return parseInt(element);
        }
        return element;
      });
    selectionSort(parsedArr);
    
  }
  const handleChange= (event)=> {
    const ele = event.target.value;
    ele.trim();
    setElements(ele);
    
    console.log(ele)
}

function selectionSort(vetor) {
    let minor;
    let message;
    let log = [];
    for (let i = 0; i < vetor.length - 1; i += 1) {
        message = `${i + 1} iteration ${vetor.toString()}`;
        log.push(message);
        minor = i;
        if(order === "ascending"){
            for (let j = i + 1; j < vetor.length; j += 1) {
                if (vetor[j] < vetor[minor]) {
                    minor = j;
                }
            }
            message = `The smallest element ${vetor[minor]}`;
            log.push(message);
        }else{
            for (let j = i + 1; j < vetor.length; j += 1) {
                if (vetor[j] > vetor[minor]) {
                    minor = j;
                }
            }
            message = `The biggest element ${vetor[minor]}`;
            log.push(message);
        }
        
        if (i !== minor) {
            message = `Swap ${vetor[minor]} with ${vetor[i]}`;
            log.push(message);
            [vetor[i], vetor[minor]] = [vetor[minor], vetor[i]];
        }else{
            message = `No swap is possible between ${vetor[minor]} and ${vetor[i]}`;
            log.push(message);
        }
        message = `The array is ${vetor.toString()}`;
        log.push(message);
    }
    setAppLog(appLog => appLog.concat(log));
    setSortedArray(sortedArray => sortedArray.concat(vetor));
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


