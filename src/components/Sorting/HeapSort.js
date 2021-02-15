import React, { Fragment, useState } from 'react';

import BaseContainer from "./Container";

import { useSelector } from 'react-redux';
import { isNumeric } from "./utils/helpers";
import Order from "./order";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})


//TODO. QUICKSORT
export default function Heap() {
  const classes = useStyles();
  const order  = useSelector(state => state.order.order);
  const [elements, setElements] = useState("");
  const [appLog, setAppLog] = useState([]);
  const [unSortedArray, setUnSortedArray] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);

  const onClick= ()=> {
    setAppLog([]);
    setSortedArray([]);
    setUnSortedArray([]);
   
    let arr = elements.split(",");
    let parsedArr = arr.map(function(element) { 
        element.trim();
        if(isNumeric(element)){
            return parseInt(element);
        }
        return element;
      });

      setUnSortedArray(unSortedArray => unSortedArray.concat(parsedArr));
      let log = [];
      heapSort(parsedArr, parsedArr.length, log);
      
     
      setAppLog(appLog => appLog.concat(log));
    
  }
  const handleChange= (event)=> {
    const ele = event.target.value;
    ele.trim();
    setElements(ele);
    
    console.log(ele)
}

const maxHeapify = (arr, n, i, log) => {
    let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index
    console.log(largest, l, r);
    //If left child is smaller than root
     if (l < n && arr[l] > arr[largest]) {
           largest = l; 
     }
    
     // If right child is smaller than smallest so far 
     if (r < n && arr[r] > arr[largest]) {
          largest = r; 
     }
     console.log(largest, "largest", i, "index");
     // If smallest is not root 
     if (largest != i) { 
          let temp = arr[i]; 
          arr[i] = arr[largest]; 
          arr[largest] = temp; 
          console.log(arr[largest],arr[i])
          let message;

          message = [`V(${arr[i]}/${arr[largest]})`, ...arr, "No"]
          log.push(message);
        // Recursively heapify the affected sub-tree 
        maxHeapify(arr, n, largest, log); 
      }
  }

  const minHeapify = (arr, n, i, log) => {
    let smallest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index
    console.log(smallest, l, r);
    //If left child is smaller than root
     if (l < n && arr[l] < arr[smallest]) {
              smallest = l; 
     }
    
     // If right child is smaller than smallest so far 
     if (r < n && arr[r] < arr[smallest]) {
          smallest = r; 
     }
     console.log(smallest, "largest");
     // If smallest is not root 
     if (smallest != i) { 
          let temp = arr[i]; 
          arr[i] = arr[smallest]; 
          arr[smallest] = temp; 

          let message;

          message = [`V(${arr[i]}/${arr[smallest]})`, ...arr, "No"]
          log.push(message);
    
        // Recursively heapify the affected sub-tree 
        minHeapify(arr, n, smallest, log); 
        return false;
      }else{
        return true;
      } 
  }
  
   // main function to do heap sort 
   const heapSort = (arr, n, log) => { 
       // Build heap (rearrange array) 
       for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
           if(order === "ascending"){
                maxHeapify(arr, n, i, log); 
                let message;

                message = ["", ...arr, "No"]
                log.push(message);
           }else{
                minHeapify(arr, n, i, log);  
                let message;

                message = ["", ...arr, "No"]
                log.push(message);
           }
           
       }
    
       // One by one extract an element from heap 
       for (let i = n - 1; i >= 0; i--) { 
        if(order === "ascending"){
            // Move current root to end 
          let temp = arr[0]; 
          arr[0] = arr[i]; 
          arr[i] = temp; 

          
          maxHeapify(arr, i, 0, log)
          // call max heapify on the reduced heap 
          const isMaxHeap = true; 
          let message = [`E(${arr[i]}/${arr[0]})`, ...arr, isMaxHeap ? "Yes" : "No"]
          log.push(message);
        }else{
                // Move current root to end 
            let temp = arr[0]; 
            arr[0] = arr[i]; 
            arr[i] = temp; 
            minHeapify(arr, i, 0, log)
            // call max heapify on the reduced heap 
            const isMinHeap = true;
            let message = [`E(${arr[i]}/${arr[0]})`, ...arr, isMinHeap ? "Yes" : "No"]
            log.push(message);
        }
          
       } 
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

            <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="right">index</TableCell>
                        {
                            unSortedArray.map((ele, i) =>{
                                return(<TableCell align="right">{ i + 1 }</TableCell>)
                            })
                        }
                    <TableCell align="right">Max-Heap?</TableCell>
                </TableRow>  
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell align="right">Start</TableCell>
                        {
                            unSortedArray.map((ele) =>{
                                return (<TableCell align="right">{ele}</TableCell>)
                            })
                        }
                    <TableCell align="right">{''}</TableCell>
                </TableRow>  
            {appLog.map((row, i) => (
                <TableRow key={i}>
                        {row.map((ele, i) => (
                            <TableCell align="right">
                            {ele}
                        </TableCell>
                	    ))}
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    {/* <Typography variant="h5">
        Answer is {sortedArray.toString()}
      </Typography> */}
    </BaseContainer> 
  );
}

