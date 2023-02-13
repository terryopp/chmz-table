import React from 'react'
import './Toolbar.css'
import { getContent } from '../common/table-data';
import {useState} from 'react'
function Toolbar(props) {
   let data=props.data
   
   const [start,setStart] = useState(1)
   const [end,setEnd] = useState(1)
   const [first,setFirst] = useState(1)
   const [second,setSecond] = useState(2)
  function addData(value) {
    // const lastIndex = Number(props.data[props.data.length - 1].id.replace('row-', ''))
    
    props.setData([...data, ...getContent(data.length, value)])
  }
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
  function deleteData() {
    if (end<start) return;
    if (start<1) return
    data.splice(start-1,end-start+1)
    data.map((row, index) => {
      row.id = `row-${index + 1}`
      row.firstColOffset = `Row ${index + 1}`
    })
    props.setData(data)
    window.scrollBy(0,5)
    
  }
 
  return (
    <div className='toolbar'>
      <div className='addButtons'>
      <button className='add-data' onClick={() => addData(1000)}> +1000 </button>
      <button className='add-data' onClick={() => addData(10000)}> +10000 </button>
      </div>
      <div className='delButtons'></div>
      <button className='add-data' onClick={deleteData}> Удалить строки в интервале  </button>
      <div className='rangeInputs'>
         <input type='number' className='rangeDel' id='startRange' value={start} onChange={addStart}>
         </input>
         <label htmlFor='startRange'>от</label>
         <br/>
         <input type='number' className='rangeDel' id='endRange' value={end} onChange={addEnd}>
         </input>
         <label htmlFor='endRange'>до</label>
      </div>
      <button className='add-data' onClick={()=> console.log('не готово')}> Поменять местами строки  </button>
      <div className='rangeInputs'>
         <input type='number' className='rangeDel' id='startRange' value={first} onChange={addFirst}>
         </input>
         
         <br/>
         <input type='number' className='rangeDel' id='endRange' value={second} onChange={addSecond}>
         </input>
        
      </div>
    </div>
  )
}

export default Toolbar
