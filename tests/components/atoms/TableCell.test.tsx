/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import React from 'react';
import TableCell from 'components/atoms/TableCell';
import '@testing-library/jest-dom';

it('TableCellのテスト', () => {
  const result = render(<TableCell title="test">test</TableCell>);
  expect(result.container).toHaveTextContent('test');
  expect(result.getByLabelText('test')).toBeDefined();
});
