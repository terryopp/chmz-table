import BaseTable, { FrozenDirection } from 'react-base-table'
import { ReactNode } from 'react';

const SHOW_FIRST_COL_WITH_ROW_ID = true
export const FIRST_COL_ID = 'firstColOffset'

export type ColumnKey = `key-${number}`

export interface Column {
  title: string
  key: ColumnKey | typeof FIRST_COL_ID
  dataKey: ColumnKey | typeof FIRST_COL_ID
  width: number
  frozen?: FrozenDirection
  cellRenderer?: (arg: any) => ReactNode
}

export interface Cell {
  id: string,
  [FIRST_COL_ID]?: string,
  [key: ColumnKey]: string,
}

let colsAmount = 0

const getIndexKeyName = (index: number): ColumnKey => `key-${index}`;

export const randomSymbolsValue = () => Math.random().toString(36).slice(2, 12)

const getContentCell = (): Cell => {
  const indexedArray = Array.from({ length: colsAmount }, (_, key) => getIndexKeyName(key))
  let initialAccumulator: any = { id: `row-${randomSymbolsValue()}` }
  if (SHOW_FIRST_COL_WITH_ROW_ID) initialAccumulator = {...initialAccumulator, [FIRST_COL_ID]: 'Row with id' }

  return indexedArray.reduce((accumulator, value) => (
      { ...accumulator, [value]: randomSymbolsValue() }),
      initialAccumulator
    ) 
}

export const getContent = (amount: number): Cell[] => 
  Array.from({ length: amount }, () => getContentCell())

export const getColumns = (amount: number): Column[] => {
  colsAmount = amount
  const cols: Column[] = Array.from({ length: colsAmount }, (_, index) => {
    const indexName = getIndexKeyName(index)
    return { title: `Column ${index + 1}`, key: indexName, dataKey: indexName, width: 150 }
  })
  if (SHOW_FIRST_COL_WITH_ROW_ID) {
    const firstCol: Column = { title: '', key: FIRST_COL_ID, dataKey: FIRST_COL_ID, width: 100, frozen: 'left' }
    cols.unshift(firstCol)
  }
  
  return cols
}

export interface TableCellProps {
  cellData: string,
  column: Column
  columnIndex: number
  columns: Column[]
  container: BaseTable
  isScrolling?: boolean
  rowData: Cell
  rowIndex: number
}
