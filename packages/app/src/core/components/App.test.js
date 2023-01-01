import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders intro text', () => {
  render(<App />);
  const textElement = screen.getByText(/save to reload/i);
  expect(textElement).toBeInTheDocument();
});
