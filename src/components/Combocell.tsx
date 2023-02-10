import React from 'react'
import {useState} from 'react'
import './Cell.css'
function Combocell(props) {
    const [value,setValue] = useState(props.cellData);
    const [column] = useState(props.column);
    // console.log(props)
    function handleChange(e) {
        setValue(e.target.value)
    }
    
  return (
    <div className='cell'>
      <select value={value} onChange={handleChange}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
       </select>
    </div>
  )
}

export default Combocell
