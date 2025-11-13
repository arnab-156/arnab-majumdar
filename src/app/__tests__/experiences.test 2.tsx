import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExperiencesPage from '../experiences/page';

test('shows Stern card with updated imagery on experiences page', () => {
    render(<ExperiencesPage />);

    expect(screen.getByText('NYU - Stern School of Business')).toBeInTheDocument();
    expect(screen.getByAltText('NYU - Stern School of Business')).toHaveAttribute('src', '/class-rep');
    expect(screen.getByText('Class Representative, Master of Business Administration - Class of 2027')).toBeInTheDocument();
});
