import React from 'react'
import './Toolbar.css'
import { getContent } from '../common/table-data';
function Toolbar(props) {
  function addData() {
    const lastIndex = Number(props.data[props.data.length - 1].id.replace('row-', ''))
    if (lastIndex) props.data.push(...getContent(lastIndex, 1000))
  }
  return (
    <div className='toolbar'>
      <button className='add-data' onClick={addData}> Добавить 1000 строк </button>
    </div>
  )
}

export default Toolbar
