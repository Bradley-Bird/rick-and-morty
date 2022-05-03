// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { MemoryRouter } from 'react-router-dom';
// import App from './App';
global.fetch = (...args) =>
  import('cross-fetch').then(({ default: fetch }) => fetch(...args));
