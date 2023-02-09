import React from 'react'
import {useState} from 'react'
import './Cell.css'
function Cell(props) {
    const [value,setValue] = useState(props.cellData);
    
    function handleChange(e) {
        setValue(e.target.value)
    }
  return (
    <div className='cell'>
      <textarea value={value} spellCheck={false} className='cell-input'  onChange={handleChange}> {value} </textarea>
    </div>
  )
}

export default Cell
