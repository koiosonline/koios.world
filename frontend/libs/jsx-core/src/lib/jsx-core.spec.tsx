import { render } from '@testing-library/react';

import JsxCore from './jsx-core';

describe('JsxCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JsxCore />);
    expect(baseElement).toBeTruthy();
  });
});
