import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../page';

test('displays Stern journey highlight on the home page', () => {
    render(<Home />);

    expect(screen.getByText('Welcome to my Stern journey!')).toBeInTheDocument();
    expect(screen.getByText('NYU - Stern School of Business')).toBeInTheDocument();
});
