import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AddProduct } from '../../components';
import { icon } from '../../constants';

describe('AddProduct', () => {
  it('AddProduct component should render', () => {
    let { getByText } = render(<AddProduct />);
    expect(getByText(icon.plus)).toBeInTheDocument();
  })
});