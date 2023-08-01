import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

test('expects initial condition to be red, and updates when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {
    name: 'Change to blue',
  });

  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByRole('checkbox');

  expect(checkBox).not.toBeChecked();
});
