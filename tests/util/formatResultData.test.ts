import formatResultData, { DayResultInputData, TeamInputData } from 'util/formatResultData';

const testInputData: DayResultInputData[] = [
  {
    day: 'n日目 (m月d日)',
    matches: [
      {
        match: 1,
        map: 'sample map',
        maxKill: 3,
        teams: [
          {
            id: 1,
            placement: 1,
            kill: 5,
          },
          {
            id: 2,
            placement: 2,
            kill: 0,
          },
        ],
      },
      {
        match: 2,
        map: 'sample map',
        maxKill: 10,
        teams: [
          {
            id: 1,
            placement: 1,
            kill: 20,
          },
          {
            id: 2,
            placement: '-',
            kill: '-',
          },
        ],
      },
    ],
  },
];

const testTeamData: TeamInputData[] = [
  {
    id: 1,
    tag: 'tt1',
    name: 'testTeam1',
  },
  {
    id: 2,
    tag: 'tt2',
    name: 'testTeam2',
  },
];

it('計算結果のテスト', () => {
  const formatted = formatResultData(testInputData, testTeamData);

  expect(formatted).toEqual([
    {
      day: 'n日目 (m月d日)',
      teams: [
        {
          noCapped: {
            id: 1,
            tag: 'tt1',
            name: 'testTeam1',
            results: [
              {
                match: 1,
                placement: 1,
                placementPoint: 12,
                kill: 5,
                killPoint: 5,
                point: 17,
              },
              {
                match: 2,
                placement: 1,
                placementPoint: 12,
                kill: 20,
                killPoint: 20,
                point: 32,
              },
            ],
          },
          capped: {
            id: 1,
            tag: 'tt1',
            name: 'testTeam1',
            results: [
              {
                match: 1,
                placement: 1,
                placementPoint: 12,
                kill: 5,
                killPoint: 3,
                point: 15,
              },
              {
                match: 2,
                placement: 1,
                placementPoint: 12,
                kill: 20,
                killPoint: 10,
                point: 22,
              },
            ],
          },
        },
        {
          noCapped: {
            id: 2,
            tag: 'tt2',
            name: 'testTeam2',
            results: [
              {
                match: 1,
                placement: 2,
                placementPoint: 9,
                kill: 0,
                killPoint: 0,
                point: 9,
              },
              {
                match: 2,
                placement: '-',
                placementPoint: 0,
                kill: '-',
                killPoint: 0,
                point: 0,
              },
            ],
          },
          capped: {
            id: 2,
            tag: 'tt2',
            name: 'testTeam2',
            results: [
              {
                match: 1,
                placement: 2,
                placementPoint: 9,
                kill: 0,
                killPoint: 0,
                point: 9,
              },
              {
                match: 2,
                placement: '-',
                placementPoint: 0,
                kill: '-',
                killPoint: 0,
                point: 0,
              },
            ],
          },
        },
      ],
    },
  ]);
});
