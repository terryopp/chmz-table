import './App.css'
import Table from './components/Table'
import Toolbar from './components/Toolbar'
import { getContent, getColumns } from './common/table-data';
import {useState,useReducer} from 'react';


function App() {
  
  const columns = getColumns(200)
  const [data, setData] = useState(() => getContent(0, 2000))
  function onChangeData(value) {
    if (data!=value) setData(value);
  }
  const onChange = onChangeData.bind(data)
  return (
    <div className='app'>
      <div className='toolbar-box'>
      <Toolbar data={data} setData={onChange}/>
      </div>
      <div className='table'>
      <Table columns={columns} data={data} setData={onChange}/>
      </div>
    </div>
  )
}

export default App
