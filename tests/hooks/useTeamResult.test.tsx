/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import { useTeamResult } from 'hooks/useTeamResult';
import { Team } from 'util/formatResultData';

const testData = {
  day: '1日目',
  teams: [
    new Team(1, 'tt1', 'testTeam1').addMatchResult(1, 1, 5, 6).addMatchResult(2, 10, 0, 6),
    new Team(2, 'tt2', 'testTeam2').addMatchResult(1, '-', '-', 6).addMatchResult(2, 1, 10, 6),
  ],
};

it('test for initial values of useTeamResult', () => {
  const { result } = renderHook(() => useTeamResult(testData, 1));

  // 初期値のテスト
  expect(result.current.forForm.enableMaxKill).toBe(false);
  expect(result.current.forForm.handleMaxKill).not.toBeUndefined();
  expect(result.current.forForm.includeAdditionalMatch).toBe(true);
  expect(result.current.forForm.handleIncludeAdditionalMatch).not.toBeUndefined();
});

it('test for result calculation of useTeamResult', () => {
  const { result } = renderHook(() => useTeamResult(testData, 1));

  expect(result.current.teamResult).toEqual([
    {
      id: 2,
      tag: 'tt2',
      name: 'testTeam2',
      results: [
        { match: 1, placement: '-', placementPoint: 0, kill: '-', killPoint: 0, point: 0 },
        { match: 2, placement: 1, placementPoint: 12, kill: 10, killPoint: 10, point: 22 },
      ],
      totalPlacementPoint: 12,
      totalKill: 10,
      totalKillPoint: 10,
      totalPoint: 22,
    },
    {
      id: 1,
      tag: 'tt1',
      name: 'testTeam1',
      results: [
        { match: 1, placement: 1, placementPoint: 12, kill: 5, killPoint: 5, point: 17 },
        { match: 2, placement: 10, placementPoint: 2, kill: 0, killPoint: 0, point: 2 },
      ],
      totalPlacementPoint: 14,
      totalKill: 5,
      totalKillPoint: 5,
      totalPoint: 19,
    },
  ]);

  // キルポイント上限を適用
  act(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result.current.forForm.handleMaxKill && result.current.forForm.handleMaxKill({} as any, true);
  });

  expect(result.current.forForm.enableMaxKill).toBe(true);

  expect(result.current.teamResult).toEqual([
    {
      id: 1,
      tag: 'tt1',
      name: 'testTeam1',
      results: [
        { match: 1, placement: 1, placementPoint: 12, kill: 5, killPoint: 5, point: 17 },
        { match: 2, placement: 10, placementPoint: 2, kill: 0, killPoint: 0, point: 2 },
      ],
      totalPlacementPoint: 14,
      totalKill: 5,
      totalKillPoint: 5,
      totalPoint: 19,
    },
    {
      id: 2,
      tag: 'tt2',
      name: 'testTeam2',
      results: [
        { match: 1, placement: '-', placementPoint: 0, kill: '-', killPoint: 0, point: 0 },
        { match: 2, placement: 1, placementPoint: 12, kill: 10, killPoint: 6, point: 18 },
      ],
      totalPlacementPoint: 12,
      totalKill: 10,
      totalKillPoint: 6,
      totalPoint: 18,
    },
  ]);

  // 延長試合 (2試合目) 無効
  act(() => {
    result.current.forForm.handleIncludeAdditionalMatch &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result.current.forForm.handleIncludeAdditionalMatch({} as any, false);
  });

  expect(result.current.forForm.includeAdditionalMatch).toBe(false);

  expect(result.current.teamResult).toEqual([
    {
      id: 1,
      tag: 'tt1',
      name: 'testTeam1',
      results: [{ match: 1, placement: 1, placementPoint: 12, kill: 5, killPoint: 5, point: 17 }],
      totalPlacementPoint: 12,
      totalKill: 5,
      totalKillPoint: 5,
      totalPoint: 17,
    },
    {
      id: 2,
      tag: 'tt2',
      name: 'testTeam2',
      results: [{ match: 1, placement: '-', placementPoint: 0, kill: '-', killPoint: 0, point: 0 }],
      totalPlacementPoint: 0,
      totalKill: 0,
      totalKillPoint: 0,
      totalPoint: 0,
    },
  ]);
});
