import './App.css'
import Table from './components/Table'
import Toolbar from './components/Toolbar'
import { getContent, getColumns } from './common/table-data';
import {useState,useEffect} from 'react';


function App() {
  const [columns, _] = useState(() => getColumns(200))
  const [data, setData] = useState(() => getContent(0, 2000))
  function moreData(value) {
    setData([...data, ...getContent(data.length, value)])
  }
  function onChangeData(value) {
    setData(value);
  }
  function deleteData(end,start) {
    if (end<start) return;
    if (start<1) return
    let temp=data.filter((_, index) => !(start-1 <= index && index < end))
    setData(temp)
  }
  function changeData(first,second) {
    if (first==second) return;
    let temparray=data.slice(0)
    let temp=temparray[first-1];
    temparray[first-1]=temparray[second-1]
    temparray[second-1]=temp
    setData(temparray)
  }
  return (
    <div className='app'>
      <div className='toolbar-box'>
      <Toolbar data={data} setData={onChangeData} deleteFunc={deleteData} swapFunc={changeData} addData={moreData}/>
      </div>
      <div className='table'>
      <Table columns={columns} data={data} changeData={onChangeData} />
      </div>
    </div>
  )
}

export default App
