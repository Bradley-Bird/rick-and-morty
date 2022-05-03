import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('<App />', () => {
  it('renders a list of characters', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    await screen.findByText(/loading/i);
  });
});
