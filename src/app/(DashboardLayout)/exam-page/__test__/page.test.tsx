// __tests__/ExamPage.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ExamPage from '../page';

test('renders ExamPage component', () => {
  render(<ExamPage />);

  // Example: Assert that certain text content is present on the page
  expect(screen.getByText(/Silahkan Mengerjakan Ujian/i)).toBeInTheDocument();

  // Add more assertions based on your component's behavior
});
