import { useRef, useEffect, useState } from 'react';
import './Table.css'
import BaseTable, { AutoResizer } from 'react-base-table'
import 'react-base-table/styles.css'
import Cell from './Cell';
import Combocell from './Combocell';
import Toolbar from './Toolbar';
function Table({data,columns,changeData}) {
  const [render,reRender] = useState(true)
  columns.map((column) => {
    column.cellRenderer = (comboprops) => <Cell props={comboprops} changeData={changeData}/>
  }) 
  columns[3].cellRenderer = (comboprops) => <Combocell props={comboprops}/>
  useEffect(() => {
      reRender(!render)
    }
  , [data])
  return (
    <div className="container">
      <AutoResizer>
        {({ width, height }) => (
          <BaseTable
            width={width}
            height={height}
            columns={columns}
            data={data}
            ignoreFunctionInColumnCompare={false}
            fixed
          />
        )}
        
      </AutoResizer>
    </div>
  )
}

export default Table
