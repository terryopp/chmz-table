import React from 'react'
import { TableCellProps } from '../common/table-data';
import {useState} from 'react'
import './Combocell.css'
function Combocell({props}: { props: TableCellProps }) {
    const startValue=props.cellData
    const [value,setValue] = useState(startValue)    
    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setValue(e.target.value)
    }
  return (
    <div className='cell'>
      <select id={props.column.key+'+'+props.rowData.id} className='select-cell'  onChange={handleChange}>
        <option value='1'>{startValue}</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
       </select>
    </div>
  )
}

export default Combocell
