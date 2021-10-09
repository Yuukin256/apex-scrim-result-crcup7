/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import React from 'react';
import PlacementTableCell from 'components/atoms/PlacementTableCell';
import '@testing-library/jest-dom';

describe('PlacementTableCellのテスト', () => {
  it('通常のテスト', () => {
    const result = render(<PlacementTableCell placement={1} placementPoint={12} />);
    expect(result.container).toHaveTextContent('1');
    expect(result.getByLabelText('12ポイント')).toBeDefined();
  });

  it('不参加のときのテスト', () => {
    const result = render(<PlacementTableCell placement="-" placementPoint={0} />);
    expect(result.container).toHaveTextContent('-');
    expect(result.getByLabelText('不参加')).toBeDefined();
  });
});
