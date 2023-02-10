import './App.css'
import Table from './components/Table'
import Toolbar from './components/Toolbar'
import { getContent, getColumns } from './common/table-data';
import {useState} from 'react';
function App() {
  const columns = getColumns(200)
  const [data, setData] = useState(() => getContent(0, 2000))
  
  
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
