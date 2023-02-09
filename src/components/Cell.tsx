import React from 'react'
import {useState} from 'react'
import './Cell.css'
function Cell(props) {
    const [value,setValue] = useState(props.cellData);
    
    function handleChange(e) {
        setValue(e.target.value)
    }
  return (
    <div>
      <input type='text' spellCheck={false} className='cell-input' value={value} onChange={handleChange}/>
    </div>
  )
}

export default Cell
