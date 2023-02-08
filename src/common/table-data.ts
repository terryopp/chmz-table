const ROWS_AMOUNT = 2000
const COLS_AMOUNT = 200

const FIRST_COL_ID = 'firstColOffset'

const getIndexName = (index: number) => `key-${index}`;

const getContentCell = (index: number) => {
  const indexedArray = Array.from({ length: COLS_AMOUNT }, (_, key) => getIndexName(key))
  return indexedArray.reduce((accumulator, value) => ({ ...accumulator, [value]: Math.random().toString(36).slice(2, 12) }), { [FIRST_COL_ID]: `Row ${index + 1}` }) 
}

export const getContent = () => 
  Array.from({ length: ROWS_AMOUNT }, (_, index) => getContentCell(index))

export const getColumns = () => {
  const cols = Array.from({ length: COLS_AMOUNT }, (_, index) => {
    const indexName = getIndexName(index)
    return { title: `Column ${index + 1}`, key: indexName, dataKey: indexName, width: 150 }
  })
  const firstCol = { title: '', key: FIRST_COL_ID, dataKey: FIRST_COL_ID, width: 100, frozen: 'left' }
  return [
    firstCol,
    ...cols
  ]
}
