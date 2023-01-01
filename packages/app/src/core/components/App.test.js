import { render, screen } from '@testing-library/react';
import App from './App';

test('renders intro text', () => {
  render(<App />);
  const textElement = screen.getByText(/Edit src\/core\/components\/app.js and save to reload./i);
  expect(textElement).toBeInTheDocument();
});
