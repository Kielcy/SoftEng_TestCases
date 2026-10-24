import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the student registration component', () => {
  render(<App />);

  expect(screen.getByText('Student Registration')).toBeInTheDocument();
  expect(screen.getByLabelText('Name')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument();
});

test('allows the user to enter a name', async () => {
  const user = userEvent.setup();
  render(<App />);

  const nameInput = screen.getByLabelText('Name');
  await user.type(nameInput, 'Juan Dela Cruz');

  expect(nameInput).toHaveValue('Juan Dela Cruz');
});

test('renders and submits the form', async () => {
  const user = userEvent.setup();
  render(<App />);

  const emailInput = screen.getByLabelText('Email');
  const nameInput = screen.getByLabelText('Name');
  const button = screen.getByRole('button', { name: 'Register' });

  await user.type(nameInput, 'Juan Dela Cruz');
  await user.type(emailInput, 'juan@example.com');
  await user.click(button);

  expect(screen.getByText('Registered: Juan Dela Cruz')).toBeInTheDocument();
});

// --- Student Task: Additional Test Case ---
test('allows the user to enter an email address', async () => {
  const user = userEvent.setup();
  render(<App />);

  const emailInput = screen.getByLabelText('Email');
  await user.type(emailInput, 'maria@example.com');

  expect(emailInput).toHaveValue('maria@example.com');
});