// __tests__/InstructionPage.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route } from 'react-router-dom';
import InstructionPage from '../page';
import { dummyExamData } from '@/app/(DashboardLayout)/components/exampage/dummy-data'; 

// Mocking useRouter
jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    back: jest.fn(),
    push: jest.fn(),
    query: { id: '1' },
  }),
}));

test('renders InstructionPage component', () => {
  // Mocking the exam data
  const mockExam = dummyExamData[0];

  render(
    <MemoryRouter initialEntries={['/exam-page/1/instruction-page']}>
      <Route path="/exam-page/:id/instruction-page">
        <InstructionPage />
      </Route>
    </MemoryRouter>
  );

  // Assert that the exam title is rendered
  expect(screen.getByText(mockExam.title)).toBeInTheDocument();

  // Example: Simulate user clicking the 'Back' button
  userEvent.click(screen.getByText('Back'));
  expect(window.location.pathname).toBe('/'); // Adjust the expected pathname based on your application's behavior

  // Example: Simulate user clicking the 'Submit' button
  userEvent.click(screen.getByText('Submit'));
  expect(window.location.pathname).toBe(`/exam-page/${mockExam.id}/test-page`); // Adjust the expected pathname based on your application's behavior

  // Add more assertions based on your component's behavior
});
