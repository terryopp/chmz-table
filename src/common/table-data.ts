const SHOW_FIRST_COL_WITH_ROW_ID = true
export const FIRST_COL_ID = 'firstColOffset'



let colsAmount = 0

const getIndexKeyName = (index: number) => `key-${index}`;

const getContentCell = (index: number) => {
  const indexedArray = Array.from({ length: colsAmount }, (_, key) => getIndexKeyName(key))
  let initialAccumulator: any = { id: `row-${index + 1}` }
  if (SHOW_FIRST_COL_WITH_ROW_ID) initialAccumulator = {...initialAccumulator, [FIRST_COL_ID]: `Row ${index + 1}` }
  
  return indexedArray.reduce((accumulator, value) => (
      { ...accumulator, [value]: Math.random().toString(36).slice(2, 12) }),
      initialAccumulator
    ) 
}

export const getContent = (startIndex: number, amount: number) => 
  Array.from({ length: amount }, (_, index) => getContentCell(startIndex + index))

export const getColumns = (amount: number) => {
  colsAmount = amount
  const cols = Array.from({ length: colsAmount }, (_, index) => {
    const indexName = getIndexKeyName(index)
    return { title: `Column ${index + 1}`, key: indexName, dataKey: indexName, width: 150 }
  })
  if (SHOW_FIRST_COL_WITH_ROW_ID) {
    const firstCol = { title: '', key: FIRST_COL_ID, dataKey: FIRST_COL_ID, width: 100, frozen: 'left' }
    cols.unshift(firstCol)
  }
  
  return cols
}
