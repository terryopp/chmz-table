import React from 'react'
import './Toolbar.css'
import { getContent } from '../common/table-data';
import {useState} from 'react'
function Toolbar(props) {
   const [start,setStart] = useState(1)
   const [end,setEnd] = useState(1)
  function addData(value) {
    const lastIndex = Number(props.data[props.data.length - 1].id.replace('row-', ''))
    if (lastIndex) props.data.push(...getContent(lastIndex, value))
  }
  function addStart(e) {
    setStart(e.target.value)
  }
  function addEnd(e) {
    setEnd(e.target.value)
  }
  function deleteData() {
    if (end<start) return;
    if (start<1) return;
    props.data.splice(start-1,end-start+1)
    props.data.map((row) => {
      row.id = 'row'+'-'+(+(row.id.split('-')[1])-end-start+1)
      row.firstColOffset = 'Row'+' '+(+(row.firstColOffset.split(' ')[1])-end-start+1)
    })
    window.scrollBy(0,5)
    console.log(props.data)
  }
  console.log(start,end)
  return (
    <div className='toolbar'>
      <div className='addButtons'>
      <button className='add-data' onClick={() => addData(1000)}> +1000 </button>
      <button className='add-data' onClick={() => addData(10000)}> +10000 </button>
      </div>
      <div className='delButtons'></div>
      <button className='add-data' onClick={deleteData}> Удалить строки в интервале  </button>
      <div className='rangeInputs'>
         <input type='text' className='rangeDel' id='startRange' value={start} onChange={addStart}>
         </input>
         <label htmlFor='startRange'>от</label>
         <br/>
         <input type='text' className='rangeDel' id='endRange' value={end} onChange={addEnd}>
         </input>
         <label htmlFor='endRange'>до</label>
      </div>
    </div>
  )
}

export default Toolbar
