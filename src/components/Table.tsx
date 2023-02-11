import './Table.css'
import BaseTable, { AutoResizer } from 'react-base-table'
import 'react-base-table/styles.css'
import Cell from './Cell';
import Combocell from './Combocell';


function Table(props) {
  let columns = props.columns
  let data = props.data
  columns[3].cellRenderer = (props) => <Combocell props={props}/>
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
            fixed
            
          />
        )}
        
      </AutoResizer>
    </div>
  )
}

export default Table
