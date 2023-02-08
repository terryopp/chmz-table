import './Table.css'
import BaseTable, { AutoResizer } from 'react-base-table'
import 'react-base-table/styles.css'
import { getContent, getColumns } from '../common/table-data';

function App() {
  const columns = getColumns()
  const data = getContent()

  return (
    <div className="container">
      <AutoResizer>
        {({ width, height }) => (
          <BaseTable
            width={width}
            height={height}
            columns={columns}
            data={data}
            fixed
          />
        )}
      </AutoResizer>
    </div>
  )
}

export default App
