import { TableCellProps } from '@mui/material/TableCell';
import React from 'react';
import TableCell from './tableCell';

const getPlacementColor = (placement: number | string): React.CSSProperties => {
  switch (placement) {
    case 1:
      return { backgroundColor: '#DBB400' };
    case 2:
      return { backgroundColor: '#B2BABA' };
    case 3:
      return { backgroundColor: '#AE6938' };
    default:
      return {};
  }
};

type Props = Omit<TableCellProps, 'title' | 'children'> & { placement: number | string; placementPoint: number };

const PlacementTableCell: React.VFC<Props> = ({ placement, placementPoint, style, ...props }) => (
  <TableCell {...props} title={`${placementPoint}ポイント`} style={{ ...getPlacementColor(placement), ...style }}>
    {placement}
  </TableCell>
);

export default PlacementTableCell;
