import React from 'react'
import {useState} from 'react'
import { FIRST_COL_ID, OPTIONS_COL_ID } from '../common/table-data';
import './Cell.css'
import Combocell from './Combocell';
function Cell({props,changeData}) {
    const [value,setValue] = useState(props.cellData);
    const column = props.column;
    function handleChange(e) {
        setValue(e.target.value)
        
    }
    let cell;
    switch(true) {
      case column.dataKey === FIRST_COL_ID: {
        cell =  <p className='cell-text'>{`Row ${props.rowIndex + 1}`}</p>;
        break;
      }
      
      default: {
        cell = <textarea value={value}   spellCheck={false} className='cell-input'  onChange={handleChange}> {value} </textarea>;
      }
    }
  return (
    <div className='cell'>
      {cell}
    </div>
  )
}

export default Cell
