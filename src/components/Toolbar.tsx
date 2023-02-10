import React from 'react'
import './Toolbar.css'
import { getContent, getColumns } from '../common/table-data';
function Toolbar(props) {
  function addData() {
    
  }
  return (
    <div className='toolbar'>
      <button className='add-data' onClick={addData}> Добавить 1000 строк </button>
    </div>
  )
}

export default Toolbar
