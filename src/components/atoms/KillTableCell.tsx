import { TableCellProps } from '@mui/material/TableCell';
import React from 'react';
import TableCell from './TableCell';

type Props = Omit<TableCellProps, 'title' | 'children'> & { kill: number | string; killPoint: number };

const KillTableCell: React.VFC<Props> = ({ kill, killPoint, ...props }) => {
  if (typeof kill === 'string') {
    return (
      <TableCell {...props} title="不参加">
        {kill}
      </TableCell>
    );
  } else {
    return (
      <TableCell {...props} title={`${kill}キル`}>
        {kill !== killPoint ? <em>{killPoint}</em> : killPoint}
      </TableCell>
    );
  }
};

export default KillTableCell;
