import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('<App />', () => {
  it('renders a list of characters', async () => {
    render(
      <MemoryRouter initialEntries={['/character/1']}>
        <App />
      </MemoryRouter>
    );
    await screen.findByText(/loading/i);

    await screen.findByText(/Rick Sanchez/i);

    await screen.findByAltText(/Image of rick sanchez/i);
  });
});

describe('App flow', () => {
  it('renders a list of characters', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    await screen.findByText(/loading/i);

    const link = await screen.findByText(/Adjudicator Rick/i);
    userEvent.click(link);

    await screen.findByAltText(/Image of Adjudicator Rick/i);
  });
});
