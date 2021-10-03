import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import React from 'react';
import ResultTable from './resultTable';
import { useTeamResult } from 'hooks/useTeamResult';
import { DayResult } from 'util/formatResultData';

interface Props {
  dayResult: DayResult;
  defaultNumbersOfMatches: number;
}

const ResultView: React.VFC<Props> = (props) => {
  const { teamResult, forForm } = useTeamResult(props.dayResult, props.defaultNumbersOfMatches);

  return (
    <>
      <h2 id={props.dayResult.day}>{props.dayResult.day}</h2>
      <FormControlLabel
        onChange={forForm.handleMaxKill}
        control={<Checkbox color="primary" checked={forForm.enableMaxKill} />}
        label="キルポイント上限を適用する"
        labelPlacement="start"
      />
      <FormControlLabel
        onChange={forForm.handleIncludeAdditionalMatch}
        control={<Checkbox color="primary" checked={forForm.includeAdditionalMatch} />}
        label={`${props.defaultNumbersOfMatches + 1}試合目以降を含める`}
        labelPlacement="start"
      />
      <ResultTable teamResult={teamResult} />
    </>
  );
};

export default ResultView;
