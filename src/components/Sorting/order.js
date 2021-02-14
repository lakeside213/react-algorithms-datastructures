import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { setOrder } from "../../store/order/actions";

export default function Order() {
  const order  = useSelector(state => state.order.order);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setOrder(event.target.value));
  };

  return (
    <FormControl component="div">
      <FormLabel component="legend">Order</FormLabel>
      <RadioGroup aria-label="order" name="order" value={order} onChange={handleChange}>
        <FormControlLabel value="ascending" control={<Radio />} label="ascending" />
        <FormControlLabel value="descending" control={<Radio />} label="descending" />
      </RadioGroup>
    </FormControl>
  );
}