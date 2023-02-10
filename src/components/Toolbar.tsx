import React from 'react'
import './Toolbar.css'
import { getContent } from '../common/table-data';
function Toolbar(props) {
  function addData(value) {
    const lastIndex = Number(props.data[props.data.length - 1].id.replace('row-', ''))
    if (lastIndex) props.data.push(...getContent(lastIndex, value))
  }
  return (
    <div className='toolbar'>
      <div className='addButtons'>
      <button className='add-data' onClick={() => addData(1000)}> +1000 </button>
      <button className='add-data' onClick={() => addData(10000)}> +10000 </button>
      </div>
    </div>
  )
}

export default Toolbar
