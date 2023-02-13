import React from 'react'
import {useState} from 'react'
import { FIRST_COL_ID, OPTIONS_COL_ID } from '../common/table-data';
import './Cell.css'
import Combocell from './Combocell';
function Cell(props) {
    const [value,setValue] = useState(props.cellData);
    const [column] = useState(props.column);
    function handleChange(e) {
        setValue(e.target.value)
    }
    function handleDelete() {
      const data: any[] = props.container.props.data.slice(0)
      const rowIndex = data.findIndex(row => row === props.rowData)
      if (typeof rowIndex === 'number') {
        data.splice(rowIndex, 1)
        data.map((row, index) => {
          row.id = `row-${index + 1}`
          row.firstColOffset = `Row ${index + 1}`
        })
      }
      props.container.props.setData(data)
      window.scrollBy(0,5)
    }
    let cell;
    switch(true) {
      case column.dataKey === FIRST_COL_ID: {
        
        cell =  <p className='cell-text'>{value}</p>;
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
