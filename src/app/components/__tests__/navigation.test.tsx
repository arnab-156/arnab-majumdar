import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navigation } from '../navigation';

test('renders primary navigation links and contact options', () => {
    render(<Navigation />);

    expect(screen.getByRole('button', { name: /open menu to navigate/i })).toBeInTheDocument();
    expect(screen.getByText('home')).toBeInTheDocument();
    expect(screen.getByText('education')).toBeInTheDocument();
    expect(screen.getByText('about')).toBeInTheDocument();
    expect(screen.getByText('login')).toBeInTheDocument();
    expect(screen.getByText('contact information')).toBeInTheDocument();
    expect(screen.getByAltText('bluesky logo')).toBeInTheDocument();
    expect(screen.getByAltText('linkedin image')).toBeInTheDocument();
    expect(screen.getByAltText('google calendar')).toBeInTheDocument();
});
