import React from 'react'
import {useState} from 'react'
import './Combocell.css'
function Combocell(props) {
    const startValue=props.props.cellData
    const [value,setValue] = useState(startValue)    
    function handleChange(e) {
        setValue(e.target.value)
    }
    
  return (
    <div className='cell'>
      <select id={props.props.column.key+'+'+props.props.rowData.id} className='select-cell'  onChange={handleChange}>
        <option value='1'>{startValue}</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
       </select>
    </div>
  )
}

export default Combocell
