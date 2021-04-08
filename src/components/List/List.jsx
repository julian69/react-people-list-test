import PropTypes from 'prop-types';
import { Table, TableThCell, TableCell, TableRow } from 'components/Table';

import { Button } from './List.styled';

export default function List({ columns, rows, action, isLoading }) {
  const tableColumns = columns ? columns : Object.keys(rows[0]);

  return (
    <Table>
      <thead>
        <tr>
          {
            tableColumns.map(column =>
              <TableThCell key={`th-${column}`}>
                {column}
              </TableThCell>)
          }
          {action && <TableThCell></TableThCell>}
        </tr>
      </thead>
      {
        !isLoading &&
          <tbody>
            {
              rows.map(row =>
                <TableRow key={`row-${row.id}`}>
                  {
                    tableColumns.map((column, index) =>
                      <TableCell key={`cell-${row[column]}-${index}`}>
                        {row[column]}
                      </TableCell>
                    )
                  }
                  {
                    action && (
                      <TableCell>
                        <Button onClick={() => action.onClick(row)}>
                          {action.label}
                        </Button>
                      </TableCell>
                    )
                  }
                </TableRow>
              )
            }
          </tbody>
      }
    </Table>
  );
}

List.propTypes = {
  columns: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
  })
};