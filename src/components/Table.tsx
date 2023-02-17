import { useEffect, useState } from 'react';
import './Table.css'
import BaseTable, { AutoResizer } from 'react-base-table'
import { Cell as CellType, Column } from '../common/table-data';
import 'react-base-table/styles.css'
import Cell from './Cell';
import Combocell from './Combocell';

interface Props {
  data: CellType[]
  columns: Column[]
}

function Table({ data, columns }: Props) {
  const [render,reRender] = useState(true)
  columns.map((column) => {
    column.cellRenderer = (comboprops) => <Cell props={comboprops} />
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
