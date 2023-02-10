import React from 'react'
import {useState} from 'react'
import { FIRST_COL_ID, OPTIONS_COL_ID } from '../common/table-data';
import './Cell.css'
function Cell(props) {
    const [value,setValue] = useState(props.cellData);
    const [column] = useState(props.column);
    // console.log(props)
    function handleChange(e) {
        setValue(e.target.value)
    }
    function handleDelete() {
      const data = props.container.props.data
      const rowIndex = data.findIndex(row => row === props.rowData)
      if (typeof rowIndex === 'number') {
        data.splice(rowIndex, 1)
      }
    }
    let cell;
    switch(true) {
      case column.dataKey === FIRST_COL_ID: {
        cell = <p className='cell-text'>{value}</p>;
        break;
      }
      case column.dataKey === OPTIONS_COL_ID: {
        cell = <button onClick={handleDelete}>удалить</button>;
        break;
      }
      default: {
        cell = <textarea value={value} spellCheck={false} className='cell-input'  onChange={handleChange}> {value} </textarea>;
      }
    }
  return (
    <div className='cell'>
      {cell}
    </div>
  )
}

export default Cell
