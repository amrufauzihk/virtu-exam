// test-page.test.tsx
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import TestPage from '../page';

// Mock the useRouter hook
jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    back: jest.fn(),
    push: jest.fn(),
  }),
  useRoute: () => ({ id: '1' }), // Adjust the ID accordingly
}));

describe('TestPage', () => {
  it('renders test page and handles user interactions', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/exam-page/1/test-page']}>
        <Route path="/exam-page/:id/test-page">
          <TestPage />
        </Route>
      </MemoryRouter>
    );

    // Assuming your component displays the first question on render
    expect(screen.getByText('Question 1:')).toBeInTheDocument();

    // Simulate selecting a choice
    fireEvent.click(screen.getByLabelText('Your Choice')); // Replace 'Your Choice' with the actual label text

    // Simulate clicking the Next Question button
    fireEvent.click(screen.getByText('Next Question'));

    // Assuming your component now displays the second question
    expect(screen.getByText('Question 2:')).toBeInTheDocument();

    // Repeat the process for other interactions as needed

    // Simulate clicking the Finish button
    fireEvent.click(screen.getByText('Finish'));

    // Verify that the router.push function was called with the correct path
    expect(window.history.length).toBe(2); // Check if the push function is called
    expect(window.history.state).toBeNull(); // Check if the state is null (no state passed to push)
    expect(window.location.pathname).toBe('/exam-page/1/result-page'); // Adjust the path accordingly
  });
});
