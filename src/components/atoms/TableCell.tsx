import MuiTableCell, { TableCellProps } from '@mui/material/TableCell';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import React from 'react';

const TableCell = styled<React.JSXElementConstructor<TableCellProps>>(({ title, children, ...props }) => {
  if (title) {
    return (
      <Tooltip title={title}>
        <MuiTableCell {...props}>{children}</MuiTableCell>
      </Tooltip>
    );
  } else {
    return <MuiTableCell {...props}>{children}</MuiTableCell>;
  }
})({
  paddingLeft: 12,
  paddingRight: 12,
});

export default TableCell;
