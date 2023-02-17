import './App.css'
import Table from './components/Table'
import Toolbar from './components/Toolbar'
import { getContent, getColumns, Cell, FIRST_COL_ID, randomSymbolsValue } from './common/table-data';
import { useState } from 'react';


function App() {
  const [columns, _] = useState(() => getColumns(200))
  const [data, setData] = useState(() => getContent(2000))
  function moreData(value: number) {
    setData([...data, ...getContent(value)])
  }
  function onChangeData(value: Cell[]) {
    setData(value);
  }
  function deleteData(end: number, start: number) {
    if (end<start) return;
    if (start<1) return
    let temp=data.filter((_, index) => !(start-1 <= index && index < end))
    setData(temp)
  }
  function changeData(first: number, second: number) {
    if (first==second) return;
    let temparray=data.slice(0)
    let temp=temparray[first-1];
    temparray[first-1]=temparray[second-1]
    temparray[second-1]=temp
    setData(temparray)
  }
  function partUpdate() {
    let temp = data.slice(0);
    for (let i=0; i<temp.length; i=i+10) {
      (Object.keys(temp[i]) as (keyof Cell)[]).forEach((key: keyof Cell) => {
        if (key !== 'id' && key !== FIRST_COL_ID) {
          temp[i][key] = randomSymbolsValue()
        }
      })
    }
    setData(temp)
  }
  return (
    <div className='app'>
      <div className='toolbar-box'>
      <Toolbar data={data} setData={onChangeData} deleteFunc={deleteData} swapFunc={changeData} addData={moreData} partUpdate={partUpdate}/>
      </div>
      <div className='table'>
      <Table columns={columns} data={data} />
      </div>
    </div>
  )
}

export default App
