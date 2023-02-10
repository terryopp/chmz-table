import './App.css'
import Table from './components/Table'
import Toolbar from './components/Toolbar'
import { getContent, getColumns } from './common/table-data';
import {useState} from 'react';
function App() {
  const columns = getColumns()
  const [data, setData] = useState(() => getContent())
  
  return (
    <div className='app'>
      <div className='toolbar-box'>
      <Toolbar data={data} setData={setData}/>
      </div>
      <div className='table'>
      <Table columns={columns} data={data}/>
      </div>
    </div>
  )
}

export default App
