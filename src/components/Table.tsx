import './Table.css'
import BaseTable, { AutoResizer } from 'react-base-table'
import 'react-base-table/styles.css'
import Cell from './Cell';
import Combocell from './Combocell';
import Toolbar from './Toolbar';


function Table(props) {
  let setData=props.setData
  let columns = props.columns
  let data = props.data
  columns[3].cellRenderer = (comboprops) => <Combocell props={comboprops}/>
  return (
    <div className="container">
      
      <AutoResizer>
        {({ width, height }) => (
          <BaseTable
            width={width}
            height={height}
            columns={columns}
            components={{
              TableCell: Cell
            }}
            data={data}
            setData={setData}
            fixed
            
          />
        )}
        
      </AutoResizer>
    </div>
  )
}

export default Table
