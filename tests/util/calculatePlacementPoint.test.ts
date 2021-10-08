import { calculatePlacementPoint } from 'util/calculatePlacementPoint';

it('順位ポイント計算結果のテスト', () => {
  expect(calculatePlacementPoint(1)).toBe(12);
  expect(calculatePlacementPoint(2)).toBe(9);
  expect(calculatePlacementPoint(3)).toBe(7);
  expect(calculatePlacementPoint(4)).toBe(5);
  expect(calculatePlacementPoint(5)).toBe(4);
  expect(calculatePlacementPoint(6)).toBe(3);
  expect(calculatePlacementPoint(7)).toBe(3);
  expect(calculatePlacementPoint(8)).toBe(2);
  expect(calculatePlacementPoint(9)).toBe(2);
  expect(calculatePlacementPoint(10)).toBe(2);
  expect(calculatePlacementPoint(11)).toBe(1);
  expect(calculatePlacementPoint(12)).toBe(1);
  expect(calculatePlacementPoint(13)).toBe(1);
  expect(calculatePlacementPoint(14)).toBe(1);
  expect(calculatePlacementPoint(15)).toBe(1);
  expect(calculatePlacementPoint(16)).toBe(0);
  expect(calculatePlacementPoint(17)).toBe(0);
  expect(calculatePlacementPoint(18)).toBe(0);
  expect(calculatePlacementPoint(19)).toBe(0);
  expect(calculatePlacementPoint(20)).toBe(0);
  expect(calculatePlacementPoint('-')).toBe(0);
});
