/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import React from 'react';
import KillTableCell from 'components/atoms/KillTableCell';
import '@testing-library/jest-dom';

describe('KillTableCellのテスト', () => {
  it('キル数とキルポイントが等しいときのテスト', () => {
    const result = render(<KillTableCell kill={5} killPoint={5} />);
    expect(result.container).toHaveTextContent('5');
    expect(result.getByLabelText('5キル')).toBeDefined();
    expect(result.container.getElementsByTagName('em').length).toBe(0);
  });

  it('キル数とキルポイントが異なるときのテスト', () => {
    const result = render(<KillTableCell kill={5} killPoint={3} />);
    expect(result.container).toHaveTextContent('3');
    expect(result.getByLabelText('5キル')).toBeDefined();
    expect(result.container.getElementsByTagName('em').length).toBe(1);
  });

  it('不参加のときのテスト', () => {
    const result = render(<KillTableCell kill="-" killPoint={0} />);
    expect(result.container).toHaveTextContent('-');
    expect(result.getByLabelText('不参加')).toBeDefined();
    expect(result.container.getElementsByTagName('em').length).toBe(0);
  });
});
