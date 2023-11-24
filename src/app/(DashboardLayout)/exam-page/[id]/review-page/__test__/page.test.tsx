import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route } from 'react-router-dom';
import ReviewPage from '../page';

describe('ReviewPage', () => {
  it('renders review page and handles back button click', () => {
    // Mock the useParams hook
    jest.mock('next/router', () => ({
      ...jest.requireActual('next/router'),
      useRouter: () => ({
        back: jest.fn(),
      }),
      useRoute: () => ({ id: '1' }), // Adjust the ID accordingly
    }));

    const { container } = render(
      <MemoryRouter initialEntries={['/exam-page/1/review-page']}>
        <Route path="/exam-page/:id/review-page">
          <ReviewPage />
        </Route>
      </MemoryRouter>
    );

    // Add your assertions based on the expected UI elements
    expect(screen.getByText('Reviewing Answers')).toBeInTheDocument();
    // Add more assertions based on your component's output

    // Simulate back button click
    userEvent.click(screen.getByText('Back'));
    expect(window.history.length).toBe(1); // Check if the back function is called
  });
});
