import './Table.css'
import BaseTable, { AutoResizer } from 'react-base-table'
import 'react-base-table/styles.css'
import { getContent, getColumns } from '../common/table-data';
import {useState} from 'react';
import Cell from './Cell';


function Table(props) {
  let columns = props.columns
  let data=props.data
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
