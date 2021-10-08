import { FormControlLabelProps } from '@mui/material/FormControlLabel';
import sum from 'lodash.sum';
import { useMemo, useState } from 'react';
import { DayResult, PlainTeamResult } from 'util/formatResultData';

export type TeamTotalResult = PlainTeamResult & {
  totalPlacementPoint: number;
  totalKill: number;
  totalKillPoint: number;
  totalPoint: number;
};

interface Result {
  teamResult: TeamTotalResult[];
  forForm: {
    enableMaxKill: boolean;
    includeAdditionalMatch: boolean;
    handleMaxKill: FormControlLabelProps['onChange'];
    handleIncludeAdditionalMatch: FormControlLabelProps['onChange'];
  };
}

export const useTeamResult = (dayResult: DayResult, defaultNumbersOfMatches: number): Result => {
  const [enableMaxKill, setEnableMaxKill] = useState<boolean>(false);
  const [includeAdditionalMatch, setIncludeAdditionalMatch] = useState<boolean>(true);

  const handleMaxKill: FormControlLabelProps['onChange'] = (_, checked) => {
    setEnableMaxKill(checked);
  };

  const handleIncludeAdditionalMatch: FormControlLabelProps['onChange'] = (_, checked) => {
    setIncludeAdditionalMatch(checked);
  };

  const teamResult: Result['teamResult'] = useMemo(() => {
    const result = enableMaxKill ? dayResult.teams.map((v) => v.capped) : dayResult.teams.map((v) => v.noCapped);

    const lastMatchPosition = includeAdditionalMatch ? void 0 : defaultNumbersOfMatches;

    const totalResult = result.map<TeamTotalResult>((team) => {
      // 最大試合数までの結果
      const matchResult = team.results.slice(0, lastMatchPosition);

      const totalPlacementPoint = sum(matchResult.map((v) => v.placementPoint));
      const totalKill = sum(matchResult.map((v) => (typeof v.kill === 'string' ? 0 : v.kill)));
      const totalKillPoint = sum(matchResult.map((v) => v.killPoint));
      const totalPoint = sum(matchResult.map((v) => v.point));

      // results は上書きして返す
      return { ...team, results: matchResult, totalPlacementPoint, totalKill, totalKillPoint, totalPoint };
    });

    return totalResult
      .sort((a, b) => {
        return Math.max(...b.results.map((v) => v.point)) - Math.max(...a.results.map((v) => v.point));
      })
      .sort((a, b) => {
        return b.totalPoint - a.totalPoint;
      });
  }, [enableMaxKill, includeAdditionalMatch]);

  return {
    teamResult,
    forForm: { enableMaxKill, includeAdditionalMatch, handleMaxKill, handleIncludeAdditionalMatch },
  };
};
