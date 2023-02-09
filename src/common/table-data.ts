const SHOW_FIRST_COL_WITH_ROW_ID = true

const ROWS_AMOUNT = 2000
const COLS_AMOUNT = 200

const FIRST_COL_ID = 'firstColOffset'

const getIndexKeyName = (index: number) => `key-${index}`;

const getContentCell = (index: number) => {
  const indexedArray = Array.from({ length: COLS_AMOUNT }, (_, key) => getIndexKeyName(key))
  const initialAccumulator = SHOW_FIRST_COL_WITH_ROW_ID ? { [FIRST_COL_ID]: `Row ${index + 1}` } : {}
  return indexedArray.reduce((accumulator, value) => (
      { ...accumulator, [value]: Math.random().toString(36).slice(2, 12), id: `row-${index + 1}` + value }),
      initialAccumulator
    ) 
}

export const getContent = () => 
  Array.from({ length: ROWS_AMOUNT }, (_, index) => getContentCell(index))

export const getColumns = () => {
  const cols = Array.from({ length: COLS_AMOUNT }, (_, index) => {
    const indexName = getIndexKeyName(index)
    return { title: `Column ${index + 1}`, key: indexName, dataKey: indexName, width: 150 }
  })
  if (SHOW_FIRST_COL_WITH_ROW_ID) {
    const firstCol = { title: '', key: FIRST_COL_ID, dataKey: FIRST_COL_ID, width: 100, frozen: 'left' }
    cols.unshift(firstCol)
  }
  return cols
}
