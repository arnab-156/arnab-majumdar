import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navigation } from '../navigation';

test('renders primary navigation links open on mobile and contact options', () => {
    render(<Navigation />);

    const homeLink = screen.getByRole('link', { name: 'Home' });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    const experiencesLink = screen.getByRole('link', { name: /Career/i });
    const nyuLink = screen.getByRole('link', { name: /NYU/i });
    const contactLink = screen.getByRole('link', { name: 'Contact' });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(experiencesLink).toBeInTheDocument();
    expect(nyuLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();

    // Primary nav stays open on mobile without requiring hover
    const navGrid = homeLink.parentElement;
    expect(navGrid).toHaveClass('grid', 'h-auto');
    expect(navGrid).not.toHaveClass('h-0');

    expect(homeLink).toHaveClass('h-10', 'text-white', 'border-white');
    expect(screen.getByText('Home')).toHaveClass('block');
    expect(screen.getByText('Home')).not.toHaveClass('hidden');
    expect(screen.getByText('Career')).toHaveClass('block', 'sm:hidden');

    expect(screen.getByText('contact information')).toBeInTheDocument();
    expect(screen.getByAltText('bluesky logo')).toBeInTheDocument();
    expect(screen.getByAltText('linkedin image')).toBeInTheDocument();
    expect(screen.getByAltText('google calendar')).toBeInTheDocument();
});
