import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import MuiTableCell, { TableCellProps } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import React from 'react';
import { TeamTotalResult } from 'hooks/useTeamResult';

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

const WidthTableCell = styled(TableCell)({
  width: '4.5em',
});

const StyledTableHead = styled(TableHead)({
  borderTop: '1px solid rgba(224, 224, 224, 1)',
  backgroundColor: '#fafafa',
});

const HeadRow1: React.VFC<{ length: number }> = (props) => {
  return (
    <TableRow>
      <TableCell colSpan={6} style={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} />
      {Array(props.length)
        .fill(null)
        .map((_, i) => (
          <TableCell
            colSpan={3}
            align="center"
            style={i + 1 !== props.length ? { borderRight: '1px solid rgba(224, 224, 224, 1)' } : {}}
            key={i + 1}
          >
            {i + 1}試合目
          </TableCell>
        ))}
    </TableRow>
  );
};

const HeadRow2: React.VFC<{ length: number }> = (props) => (
  <TableRow>
    <WidthTableCell align="center" style={{ paddingLeft: 10 }}>
      総合順位
    </WidthTableCell>
    <TableCell align="center" colSpan={2}>
      チーム
    </TableCell>
    <WidthTableCell align="center">合計ポイント</WidthTableCell>
    <WidthTableCell align="center">合計順位ポイント</WidthTableCell>
    <WidthTableCell align="center" style={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
      合計キルポイント
    </WidthTableCell>
    {Array(props.length)
      .fill(null)
      .flatMap((_, i) => [
        <WidthTableCell key={i + 'a'} align="center">
          順位
        </WidthTableCell>,
        <WidthTableCell key={i + 'b'} align="center">
          キルポイント
        </WidthTableCell>,
        <WidthTableCell
          key={i + 'c'}
          align="center"
          style={i + 1 !== props.length ? { borderRight: '1px solid rgba(224, 224, 224, 1)' } : {}}
        >
          ポイント
        </WidthTableCell>,
      ])}
  </TableRow>
);

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

interface Props {
  teamResult: TeamTotalResult[];
}

const ResultTable: React.VFC<Props> = (props) => {
  const numberOfMatches = props.teamResult[0].results.length;

  return (
    <TableContainer>
      <Table size="small" style={{ width: 'auto' }}>
        <StyledTableHead>
          <HeadRow1 length={numberOfMatches} />
          <HeadRow2 length={numberOfMatches} />
        </StyledTableHead>
        <TableBody>
          {props.teamResult.map((team, i) => (
            <TableRow hover key={team.id}>
              <TableCell align="right">{i + 1}</TableCell>
              <TableCell>{team.tag}</TableCell>
              <TableCell>{team.name}</TableCell>
              <TableCell align="right">
                <strong>{team.totalPoint}</strong>
              </TableCell>
              <TableCell align="right">{team.totalPlacementPoint}</TableCell>
              <TableCell
                align="right"
                title={`${team.totalKill}キル`}
                style={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}
              >
                {team.totalKill !== team.totalKillPoint ? <em>{team.totalKillPoint}</em> : team.totalKillPoint}
              </TableCell>
              {team.results.flatMap((match) => {
                return [
                  <TableCell
                    key={`${team.id}_${match.match}_placement`}
                    title={`${match.placementPoint}ポイント`}
                    align="right"
                    style={getPlacementColor(match.placement)}
                  >
                    {match.placement}
                  </TableCell>,
                  <TableCell title={`${match.kill}キル`} key={`${team.id}_${match.match}_kill`} align="right">
                    {(typeof match.kill === 'string' ? 0 : match.kill) !== match.killPoint ? (
                      <em>{match.killPoint}</em>
                    ) : (
                      match.killPoint
                    )}
                  </TableCell>,
                  <TableCell
                    key={`${team.id}_${match.match}_point`}
                    align="right"
                    style={match.match !== numberOfMatches ? { borderRight: '1px solid rgba(224, 224, 224, 1)' } : {}}
                  >
                    {match.point}
                  </TableCell>,
                ];
              })}
            </TableRow>
          ))}
        </TableBody>
        <StyledTableHead>
          <HeadRow2 length={numberOfMatches} />
          <HeadRow1 length={numberOfMatches} />
        </StyledTableHead>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
