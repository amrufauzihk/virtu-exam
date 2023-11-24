// Dashboard.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from '../page';
import '@testing-library/jest-dom'

// Mock the useRouter hook to provide necessary route information
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
  }),
}));

test('renders Dashboard component', () => {
  render(<Dashboard />);
  
  // Assuming there is a mock ExamCard component, you can check for its presence
  const examCardElement = screen.getByText(/silahkan mengerjakan ujian/i);
  expect(examCardElement).toBeInTheDocument();
});

test('search functionality works', () => {
  render(<Dashboard />);

  // Mock data for testing
  const dummyData = [
    { id: 1, title: 'Math Exam' },
    { id: 2, title: 'English Exam' },
    { id: 3, title: 'Science Exam' },
  ];

  // Mock the dummy data
  jest.mock('../components/Dashboard/dummy-data', () => ({
    dummyExamData: dummyData,
  }));

  // Trigger the search functionality
  const searchInput = screen.getByLabelText(/search/i);
  fireEvent.change(searchInput, { target: { value: 'English' } });

  // Check if the filtered exam is displayed
  const englishExamElement = screen.getByText(/English Exam/i);
  expect(englishExamElement).toBeInTheDocument();

  // Check if other exams are not displayed
  const mathExamElement = screen.queryByText(/Math Exam/i);
  const scienceExamElement = screen.queryByText(/Science Exam/i);
  expect(mathExamElement).not.toBeInTheDocument();
  expect(scienceExamElement).not.toBeInTheDocument();
});

// You can add more tests as needed
