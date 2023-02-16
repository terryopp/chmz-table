import React from 'react'
import './Toolbar.css'
import { getContent } from '../common/table-data';
import {useState} from 'react'
function Toolbar({data, setData, deleteFunc, swapFunc, addData, partUpdate}) {
   
   const [start,setStart] = useState(1)
   const [end,setEnd] = useState(1)
   const [first,setFirst] = useState(1)
   const [second,setSecond] = useState(2)
  function addStart(e) {
    setStart(e.target.value)
  }
  function addEnd(e) {
    setEnd(e.target.value)
  }
  function addFirst(e) {
    setFirst(e.target.value)
  }
  function addSecond(e) {
    setSecond(e.target.value)
  }
  return (
    <div className='toolbar'>
      <div className='addButtons'>
      <button className='add-data' onClick={() => addData(1000)}> +1000 </button>
      </div>
      <div className='addButtons'>
      <button className='add-data' onClick={() => addData(10000)}> +10000 </button>
      </div>
      <div className='addButtons'>
      <button className='add-data' onClick={()=> deleteFunc(end,start)}> Удалить строки в интервале  </button>
      </div>
      <div className='rangeInputs'>
         <input type='number' className='rangeDel' id='startRange' value={start} onChange={addStart}>
         </input>
         <label htmlFor='startRange'>от</label>
         <br/>
         <input type='number' className='rangeDel' id='endRange' value={end} onChange={addEnd}>
         </input>
         <label htmlFor='endRange'>до</label>
      </div>
      <div className='addButtons'>
      <button className='add-data' onClick={() => swapFunc(first,second)}> Поменять местами строки  </button>
      </div>
      <div className='rangeInputs'>
         <input type='number' className='rangeDel' id='startRange' value={first} onChange={addFirst}>
         </input>
         <br/>
         <input type='number' className='rangeDel' id='endRange' value={second} onChange={addSecond}>
         </input>
      </div>
      <div className='addButtons'>
      <button className='add-data' onClick={partUpdate}> Частичный апдейт  </button>
      </div>
    </div>
  )
}

export default Toolbar
