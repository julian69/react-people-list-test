import { render, screen } from '@testing-library/react';
import Icon from './';

describe('Button', () => {
  it('spreads custom attributes', () => {
    render(
      <Icon name="user" fill="#ffffff" data-testid="icon-test" />
    );

    const icon = screen.getByTestId('icon-test');

    expect(icon.getAttribute('fill')).toBe('#ffffff');
  });
});
