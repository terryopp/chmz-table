import React, {useState} from 'react'
import { FIRST_COL_ID, TableCellProps } from '../common/table-data';
import './Cell.css'

function Cell({props}: { props: TableCellProps}) {

    const [value,setValue] = useState(props.cellData);
    const column = props.column;
    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setValue(e.target.value)
        
    }
    let cell;
    switch(true) {
      case column.dataKey === FIRST_COL_ID: {
        cell =  <p className='cell-text'>{`Row ${props.rowIndex + 1}`}</p>;
        break;
      }
      
      default: {
        cell = <textarea value={value}   spellCheck={false} className='cell-input'  onChange={handleChange}> {value} </textarea>;
      }
    }
  return (
    <div className='cell'>
      {cell}
    </div>
  )
}

export default Cell
