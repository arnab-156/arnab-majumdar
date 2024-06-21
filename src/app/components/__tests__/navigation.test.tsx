import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navigation } from '../navigation';

test('loads and displays greeting', async () => {
    render(<Navigation />);

    expect(screen.getByText('technology')).toBeInTheDocument();
    expect(screen.getByText('home')).toBeInTheDocument();
    expect(screen.getByText('lotus mahal')).toBeInTheDocument();
    expect(screen.getByAltText('headshot of arnab majumdar')).toBeInTheDocument();
    expect(screen.getByAltText('instagram image')).toBeInTheDocument();
    expect(screen.getByAltText('linkedin image')).toBeInTheDocument();
});
