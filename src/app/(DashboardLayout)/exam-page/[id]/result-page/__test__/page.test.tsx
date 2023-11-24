import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route } from 'react-router-dom';
import ResultPage from '../page';

describe('ResultPage', () => {
  it('renders exam details and handles review button click', () => {
    // Mock the useParams hook
    jest.mock('next/router', () => ({
      ...jest.requireActual('next/router'),
      useRouter: () => ({
        back: jest.fn(),
      }),
      useRoute: () => ({ id: '1' }), // Adjust the ID accordingly
    }));

    const { container } = render(
      <MemoryRouter initialEntries={['/exam-page/1/result-page']}>
        <Route path="/exam-page/:id/result-page">
          <ResultPage />
        </Route>
      </MemoryRouter>
    );

    // Add your assertions based on the expected UI elements
    expect(screen.getByText('Exam Result')).toBeInTheDocument();
    // Add more assertions based on your component's output

    // Simulate back button click
    userEvent.click(screen.getByText('Back'));
    expect(window.history.length).toBe(1); // Check if the back function is called
  });
});
